import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const FloatingCube = ({ position, scale = 1 }) => {
  const meshRef = useRef();

  // Memoize geometry and material for performance
  const geometry = useMemo(() => [1, 1, 1], []);
  const materialProps = useMemo(() => ({
    color: '#ffffff',
    transparent: true,
    opacity: 0.6,
    distort: 0.3,
    speed: 2
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={geometry} />
        <MeshDistortMaterial {...materialProps} />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position, scale = 1 }) => {
  const meshRef = useRef();

  // Optimize sphere geometry for mobile
  const sphereArgs = useMemo(() => [1, 24, 24], []);

  const materialProps = useMemo(() => ({
    color: '#ffffff',
    transparent: true,
    opacity: 0.4,
    distort: 0.2,
    speed: 1.5
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={sphereArgs} />
        <MeshDistortMaterial {...materialProps} />
      </mesh>
    </Float>
  );
};

const FloatingPyramid = ({ position, scale = 1 }) => {
  const meshRef = useRef();

  const materialProps = useMemo(() => ({
    color: '#ffffff',
    transparent: true,
    opacity: 0.5,
    distort: 0.4,
    speed: 3
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <coneGeometry args={[1, 2, 4]} />
        <MeshDistortMaterial {...materialProps} />
      </mesh>
    </Float>
  );
};

const FloatingGeometry = () => {
  return (
    <>
      <FloatingCube position={[-4, 2, -2]} scale={0.8} />
      <FloatingCube position={[4, -1, -3]} scale={0.6} />
      <FloatingSphere position={[-2, -2, -1]} scale={0.7} />
      <FloatingSphere position={[3, 3, -2]} scale={0.9} />
      <FloatingPyramid position={[0, 1, -4]} scale={0.5} />
      <FloatingPyramid position={[-3, 0, -1]} scale={0.4} />
      <FloatingCube position={[2, -3, -2]} scale={0.3} />
      <FloatingSphere position={[-1, 3, -3]} scale={0.5} />
    </>
  );
};

export default FloatingGeometry;
