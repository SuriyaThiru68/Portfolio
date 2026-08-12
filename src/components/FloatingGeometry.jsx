import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Floating Particle Field ─── */
function ParticleField({ count = 120, color = '#7e3eff' }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
        ],
        scale: Math.random() * 0.06 + 0.02,
        speed: Math.random() * 0.3 + 0.1,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset) * 0.5,
        p.position[1] + Math.cos(t * p.speed * 0.7 + p.offset) * 0.8,
        p.position[2] + Math.sin(t * p.speed * 0.5) * 0.3
      );
      dummy.scale.setScalar(p.scale * (1 + Math.sin(t * p.speed + p.offset) * 0.3));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </instancedMesh>
  );
}

/* ─── Floating Wireframe Shapes ─── */
function FloatingShape({ position, rotation, scale, speed, shape = 'icosahedron', color = '#7e3eff' }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = rotation[0] + t * speed * 0.3;
    ref.current.rotation.y = rotation[1] + t * speed * 0.5;
    ref.current.rotation.z = rotation[2] + t * speed * 0.2;
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.4) * 0.5;
  });

  const GeometryComponent = {
    icosahedron: <icosahedronGeometry args={[1, 0]} />,
    octahedron: <octahedronGeometry args={[1, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
    torus: <torusGeometry args={[1, 0.3, 8, 16]} />,
    torusKnot: <torusKnotGeometry args={[0.8, 0.25, 64, 8]} />,
  }[shape];

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {GeometryComponent}
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

/* ─── Main 3D Scene ─── */
const FloatingGeometry = ({ section = 'default' }) => {
  const shapes = useMemo(() => {
    const configs = {
      default: [
        { shape: 'icosahedron', position: [-6, 3, -5], rotation: [0.3, 0.5, 0], scale: 1.5, speed: 0.4, color: '#7e3eff' },
        { shape: 'octahedron', position: [7, -2, -8], rotation: [0.1, 0.3, 0.2], scale: 2, speed: 0.3, color: '#a855f7' },
        { shape: 'torus', position: [4, 4, -6], rotation: [0.5, 0.2, 0.1], scale: 1.2, speed: 0.5, color: '#6366f1' },
        { shape: 'dodecahedron', position: [-5, -3, -7], rotation: [0.2, 0.4, 0.3], scale: 1.8, speed: 0.35, color: '#7e3eff' },
        { shape: 'torusKnot', position: [0, 5, -10], rotation: [0.1, 0.6, 0], scale: 1, speed: 0.25, color: '#a855f7' },
      ],
      skills: [
        { shape: 'icosahedron', position: [-8, 2, -6], rotation: [0.5, 0.3, 0.1], scale: 2, speed: 0.3, color: '#06b6d4' },
        { shape: 'torusKnot', position: [6, -3, -8], rotation: [0.2, 0.5, 0.3], scale: 1.3, speed: 0.4, color: '#7e3eff' },
        { shape: 'octahedron', position: [8, 4, -5], rotation: [0.4, 0.1, 0.2], scale: 1.6, speed: 0.35, color: '#a855f7' },
      ],
    };
    return configs[section] || configs.default;
  }, [section]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
      aria-hidden
    >
      <Canvas
        dpr={1}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ParticleField count={80} color="#7e3eff" />
        {shapes.map((s, i) => (
          <FloatingShape key={i} {...s} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingGeometry;
