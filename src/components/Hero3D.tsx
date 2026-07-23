"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Blob() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const { x, y } = state.pointer;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, y * 0.4, 0.05);
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, x * 0.6, 0.05);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.45, 48]} />
        <MeshDistortMaterial
          color="#c8f542"
          distort={0.42}
          speed={2}
          roughness={0.15}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Ring() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.elapsedTime * 0.3;
    ring.current.rotation.x = Math.PI / 2.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <Torus ref={ring} args={[2.15, 0.032, 16, 120]} rotation={[Math.PI / 2.3, 0, 0]}>
      <meshStandardMaterial color="#111111" roughness={0.4} />
    </Torus>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      aria-hidden
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-5, -3, 2]} intensity={0.4} color="#f0abfc" />
      <Blob />
      <Ring />
    </Canvas>
  );
}
