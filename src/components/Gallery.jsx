import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// ── local project assets ────────────────────────────────────────────────────
import popcorniq     from "../assets/popcorniq.png";
import codeflow      from "../assets/codeflow.png";
import codenotify    from "../assets/code notify.jpg";
import avatarbooking from "../assets/avatarbooking.png";
import iot           from "../assets/iot.jpg";

// ── Three.js tunnel constants ───────────────────────────────────────────────
const TW = 2, TH = 1.8, SD = 1, NS = 15, LR = 0.003;
const FOG_FAR = NS * SD * 0.95;
const PALETTE = ["#b6a4e5","#bef2bd","#FF0055","#E8FF00","#0055FF","#111111"];

// ── Project data ────────────────────────────────────────────────────────────
const PROJECTS = [
  { id:"01", img: popcorniq     },
  { id:"02", img: codeflow      },
  { id:"03", img: codenotify    },
  { id:"04", img: avatarbooking },
  { id:"05", img: iot           },
];

// ── Tunnel Canvas ────────────────────────────────────────────────────────────
function TunnelCanvas() {
  const frameRef  = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const pressRef  = useRef(false);

  useEffect(() => {
    const frame = frameRef.current, canvas = canvasRef.current;
    if (!frame || !canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000");
    scene.fog = new THREE.Fog(new THREE.Color("#000000"), FOG_FAR * 0.3, FOG_FAR);

    const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference:"high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const hw = TW/2, hh = TH/2;
    const cols = 4, rows = 4;
    const colW = TW/cols, rowH = TH/rows;

    const lineMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#b6a4e5"), transparent:true, opacity:0.4 });
    const colorMats = PALETTE.map(h => new THREE.MeshBasicMaterial({ color: new THREE.Color(h), side: THREE.DoubleSide }));

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    const fading = [];
    const imgUrls = PROJECTS.map(p => p.img);
    const imageMats = imgUrls.map(src => {
      const mat = new THREE.MeshBasicMaterial({ transparent:true, opacity:0, side:THREE.DoubleSide });
      loader.load(src, tex => {
        tex.minFilter = THREE.LinearFilter; tex.generateMipmaps = false;
        tex.colorSpace = THREE.SRGBColorSpace;
        mat.map = tex; mat.needsUpdate = true; fading.push(mat);
      }, undefined, () => {});
      return mat;
    });

    const geoFloor = new THREE.PlaneGeometry(colW, SD);
    const geoWall  = new THREE.PlaneGeometry(SD, rowH);
    const geoTZ = new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,-SD)),1,LR,8);
    const geoTX = new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(0,0,0),new THREE.Vector3(TW,0,0)),1,LR,8);
    const geoTY = new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(0,0,0),new THREE.Vector3(0,TH,0)),1,LR,8);

    const tube = (geo,x,y,z=0) => { const m = new THREE.Mesh(geo,lineMat); m.position.set(x,y,z); return m; };

    const SLOTS = [];
    const zs = -SD/2;
    for(let i=0;i<cols;i++){ const x=-hw+i*colW+colW/2; SLOTS.push({geo:geoFloor,pos:new THREE.Vector3(x,-hh,zs),rot:new THREE.Euler(-Math.PI/2,0,0)}); SLOTS.push({geo:geoFloor,pos:new THREE.Vector3(x,hh,zs),rot:new THREE.Euler(Math.PI/2,0,0)}); }
    for(let i=0;i<rows;i++){ const y=-hh+i*rowH+rowH/2; SLOTS.push({geo:geoWall,pos:new THREE.Vector3(-hw,y,zs),rot:new THREE.Euler(0,Math.PI/2,0)}); SLOTS.push({geo:geoWall,pos:new THREE.Vector3(hw,y,zs),rot:new THREE.Euler(0,-Math.PI/2,0)}); }

    let ci=0,ii=0,pi=0,sp=0,raf=0,last=0,alive=true;

    function populate(g){
      const ts=pi++%2===0;
      for(const s of g.userData.slabs){
        if(!ts||Math.random()>0.5){s.visible=false;continue;}
        s.visible=true;
        if(Math.random()>0.45){s.material=imageMats[(3*ii++)%imageMats.length];}
        else{s.material=colorMats[(5*ci++)%colorMats.length];}
      }
    }

    function createSeg(z){
      const g=new THREE.Group(); g.position.z=z;
      for(let i=0;i<=cols;i++){const x=-hw+i*colW;g.add(tube(geoTZ,x,-hh));g.add(tube(geoTZ,x,hh));}
      for(let i=1;i<rows;i++){const y=-hh+i*rowH;g.add(tube(geoTZ,-hw,y));g.add(tube(geoTZ,hw,y));}
      g.add(tube(geoTX,-hw,-hh));g.add(tube(geoTX,-hw,hh));
      g.add(tube(geoTY,-hw,-hh));g.add(tube(geoTY,hw,-hh));
      const slabs=SLOTS.map(s=>{const m=new THREE.Mesh(s.geo,colorMats[0]);m.position.copy(s.pos);m.rotation.copy(s.rot);m.visible=false;g.add(m);return m;});
      g.userData.slabs=slabs; populate(g); return g;
    }

    const segs=[];
    for(let i=0;i<NS;i++){const g=createSeg(-i*SD);scene.add(g);segs.push(g);}

    const resize=()=>{const w=Math.max(1,frame.clientWidth),h=Math.max(1,frame.clientHeight);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);};
    const ro=new ResizeObserver(resize);ro.observe(frame);resize();

    const tick=(now)=>{
      if(!alive)return; raf=requestAnimationFrame(tick);
      const dt=last?Math.min((now-last)/1000,1/30):1/60; last=now;
      sp+=pressRef.current?8:0.7;
      const want=-0.05*sp;
      camera.position.z+=0.1*(want-camera.position.z);
      const span=NS*SD,z=camera.position.z;
      for(const seg of segs){
        if(seg.position.z>z+SD){let mn=0;for(const s of segs)mn=Math.min(mn,s.position.z);seg.position.z=mn-SD;populate(seg);}
        else if(seg.position.z<z-span-SD){let mx=-999999;for(const s of segs)mx=Math.max(mx,s.position.z);seg.position.z=mx+SD;populate(seg);}
      }
      for(let i=fading.length-1;i>=0;i--){const m=fading[i];m.opacity=Math.min(1,m.opacity+dt);if(m.opacity>=1)fading.splice(i,1);}
      renderer.render(scene,camera);
    };
    raf=requestAnimationFrame(tick);

    const onMove=(e)=>{const el=cursorRef.current;if(!el)return;const r=frame.getBoundingClientRect();el.style.left=`${e.clientX-r.left}px`;el.style.top=`${e.clientY-r.top}px`;};
    const onEnter=()=>{const el=cursorRef.current;if(el)el.style.opacity="1";};
    const onLeave=()=>{pressRef.current=false;const el=cursorRef.current;if(el){el.style.opacity="0";el.style.transform="translate(-50%,-50%) scale(1)";}};
    const onDown=()=>{pressRef.current=true;const el=cursorRef.current;if(el)el.style.transform="translate(-50%,-50%) scale(0.8)";};
    const onUp=()=>{pressRef.current=false;const el=cursorRef.current;if(el)el.style.transform="translate(-50%,-50%) scale(1)";};

    frame.addEventListener("pointermove",onMove);frame.addEventListener("pointerenter",onEnter);
    frame.addEventListener("pointerleave",onLeave);frame.addEventListener("pointerdown",onDown);
    window.addEventListener("pointerup",onUp);

    return()=>{
      alive=false;cancelAnimationFrame(raf);ro.disconnect();
      frame.removeEventListener("pointermove",onMove);frame.removeEventListener("pointerenter",onEnter);
      frame.removeEventListener("pointerleave",onLeave);frame.removeEventListener("pointerdown",onDown);
      window.removeEventListener("pointerup",onUp);
      geoFloor.dispose();geoWall.dispose();geoTZ.dispose();geoTX.dispose();geoTY.dispose();
      for(const m of colorMats)m.dispose();
      for(const m of imageMats){m.map?.dispose();m.dispose();}
      lineMat.dispose();renderer.dispose();
    };
  },[]);

  return(
    <div ref={frameRef} style={{position:"absolute",inset:0,cursor:"none"}}>
      <canvas ref={canvasRef} style={{display:"block",width:"100%",height:"100%"}}/>
      <div ref={cursorRef} style={{position:"absolute",top:0,left:0,transform:"translate(-50%,-50%) scale(1)",pointerEvents:"none",opacity:0,background:"#E8FF00",color:"#000",borderRadius:9999,border:"1px solid #000",padding:"8px 20px",fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"0.75rem",letterSpacing:"0.1em",textTransform:"uppercase",transition:"transform 0.12s ease,opacity 0.2s ease",whiteSpace:"nowrap",userSelect:"none"}}>
        HOLD TO BOOST
      </div>
    </div>
  );
}

// ── Gallery Section ──────────────────────────────────────────────────────────
const Gallery = () => {
  return (
    <section id="gallery" style={{backgroundColor:"#000",color:"#fff",overflow:"hidden"}}>
      <div style={{position:"relative",width:"100%",height:"100vh",minHeight:600}}>
        <TunnelCanvas/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(0,0,0,0.05) 0%,rgba(0,0,0,0) 35%,rgba(0,0,0,0.85) 100%)",pointerEvents:"none"}}/>
      </div>
    </section>
  );
};

export default Gallery;
