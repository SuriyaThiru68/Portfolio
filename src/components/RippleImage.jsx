import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Ripple Shader Material ─── */
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uIntensity;
  uniform float uRippleTime;
  uniform vec2 uResolution;
  uniform float uImageAspect;
  varying vec2 vUv;

  void main() {
    // Cover-fit: compute UVs that preserve image aspect ratio
    vec2 screenAspect = uResolution / min(uResolution.x, uResolution.y);
    vec2 imageAspect = vec2(uImageAspect, 1.0);

    vec2 coverScale = screenAspect / imageAspect;
    float scale = max(coverScale.x, coverScale.y);
    vec2 coverUv = (vUv - 0.5) * (screenAspect / (imageAspect * scale)) + 0.5;

    // ── Ripple distortion ──
    vec2 mouseUV = uMouse;
    float dist = distance(coverUv, mouseUV);

    // Multiple concentric ripples radiating from cursor
    float ripple1 = sin(dist * 30.0 - uRippleTime * 4.0) * exp(-dist * 4.0);
    float ripple2 = sin(dist * 20.0 - uRippleTime * 3.0) * exp(-dist * 5.0);
    float ripple3 = sin(dist * 40.0 - uRippleTime * 5.0) * exp(-dist * 6.0);

    float ripple = (ripple1 * 0.5 + ripple2 * 0.3 + ripple3 * 0.2) * uIntensity;

    // Displacement direction (radial from mouse)
    vec2 dir = coverUv - mouseUV;
    float dirLen = length(dir);
    vec2 normDir = dirLen > 0.001 ? dir / dirLen : vec2(0.0);

    vec2 displaced = coverUv + normDir * ripple * 0.04;

    // ── Subtle idle breathing / organic wave ──
    float breath = sin(uTime * 0.8) * 0.003;
    float wave = sin(coverUv.x * 6.0 + uTime * 1.2) * sin(coverUv.y * 4.0 + uTime * 0.9) * 0.002;
    displaced += vec2(breath + wave, breath * 0.5 - wave * 0.7);

    // Slight chromatic aberration on distortion
    float chromaStrength = ripple * 0.008;
    float r = texture2D(uTexture, displaced + normDir * chromaStrength).r;
    float g = texture2D(uTexture, displaced).g;
    float b = texture2D(uTexture, displaced - normDir * chromaStrength).b;
    float a = texture2D(uTexture, displaced).a;

    // ── Convert to high-contrast black & white ──
    float luminance = dot(vec3(r, g, b), vec3(0.2126, 0.7152, 0.0722));
    // Contrast boost: push midtones toward black/white
    float contrast = 1.3;
    float brightness = 0.05;
    float bw = clamp((luminance - 0.5) * contrast + 0.5 + brightness, 0.0, 1.0);

    gl_FragColor = vec4(vec3(bw), a);
  }
`;

/* ─── Ripple Mesh ─── */
function RippleMesh({ texture, imageAspect }) {
  const meshRef = useRef();
  const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMouseRef = useRef(new THREE.Vector2(0.5, 0.5));
  const intensityRef = useRef(0);
  const targetIntensityRef = useRef(0);
  const rippleTimeRef = useRef(0);

  const { viewport, size } = useThree();

  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uTime: { value: 0 },
    uIntensity: { value: 0 },
    uRippleTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uImageAspect: { value: imageAspect },
  }), [texture, imageAspect]);

  // Update resolution on resize
  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

  // Mouse handler
  const handlePointerMove = useCallback((e) => {
    // Convert to 0-1 UV space
    const x = (e.clientX / window.innerWidth);
    const y = 1.0 - (e.clientY / window.innerHeight);
    targetMouseRef.current.set(x, y);
    targetIntensityRef.current = 1.0;
  }, []);

  const handlePointerLeave = useCallback(() => {
    targetIntensityRef.current = 0;
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [handlePointerMove, handlePointerLeave]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material;

    // Smooth mouse lerp
    mouseRef.current.lerp(targetMouseRef.current, 0.08);
    mat.uniforms.uMouse.value.copy(mouseRef.current);

    // Smooth intensity lerp
    intensityRef.current += (targetIntensityRef.current - intensityRef.current) * 0.05;
    mat.uniforms.uIntensity.value = intensityRef.current;

    // Continuous time
    mat.uniforms.uTime.value += delta;

    // Ripple time — only advances when intensity > 0 for wave propagation
    rippleTimeRef.current += delta * (0.5 + intensityRef.current * 1.5);
    mat.uniforms.uRippleTime.value = rippleTimeRef.current;
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

/* ─── Main RippleImage Component ─── */
const RippleImage = ({ src, alt = '' }) => {
  const [texture, setTexture] = useState(null);
  const [imageAspect, setImageAspect] = useState(1);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(src, (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      setTexture(tex);
      setImageAspect(tex.image.width / tex.image.height);
    });
  }, [src]);

  if (!texture) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
      aria-label={alt}
      role="img"
    >
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <RippleMesh texture={texture} imageAspect={imageAspect} />
      </Canvas>
    </div>
  );
};

export default RippleImage;
