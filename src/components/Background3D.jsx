import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Float, Cloud, Sky, Environment, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Realistic Water Plane ─── */
function Ocean() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Gentle wave movement via vertex displacement
    ref.current.position.y = -2.3 + Math.sin(t * 0.5) * 0.05;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.3, 0]} receiveShadow>
      <circleGeometry args={[30, 64]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={512}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#0077b6"
        metalness={0.5}
        mirror={0.5}
      />
    </mesh>
  );
}

/* ─── Animated Waves (Smaller transparent surface on top of ocean) ─── */
function WaveRipples() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = t * 0.05;
    ref.current.position.y = -2.15 + Math.sin(t * 0.8) * 0.03;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.15, 0]}>
      <ringGeometry args={[5, 20, 64]} />
      <meshStandardMaterial color="#48cae4" transparent opacity={0.25} roughness={0.1} />
    </mesh>
  );
}

/* ─── Realistic Sand Island ─── */
function SandIsland() {
  return (
    <group>
      {/* Main island body - layered for realism */}
      <mesh position={[0, -2, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[5, 4.2, 1, 48]} />
        <meshStandardMaterial color="#e6c97a" roughness={0.95} metalness={0.0} />
      </mesh>
      {/* Sandy beach edge */}
      <mesh position={[0, -2.05, 0]} receiveShadow>
        <cylinderGeometry args={[5.3, 5, 0.3, 48]} />
        <meshStandardMaterial color="#f0d9a0" roughness={1} metalness={0} />
      </mesh>
      {/* Underwater rock base */}
      <mesh position={[0, -2.4, 0]}>
        <cylinderGeometry args={[4.5, 3.5, 0.6, 32]} />
        <meshStandardMaterial color="#7a6840" roughness={1} metalness={0} />
      </mesh>
      {/* Small sand mound */}
      <mesh position={[2, -1.4, 1]} castShadow>
        <sphereGeometry args={[0.6, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#e6c97a" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* ─── Realistic Trunk (multiple segments) ─── */
function PalmTree({ position, lean = 0.15, scale = 1 }) {
  const leavesRef = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    leavesRef.current.rotation.z = Math.sin(t * 0.7) * 0.08;
    leavesRef.current.rotation.x = Math.sin(t * 0.4) * 0.04;
  });
  return (
    <group position={position} scale={scale}>
      {/* Trunk segments for curved look */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, lean]} castShadow>
        <cylinderGeometry args={[0.12, 0.22, 1.5, 8]} />
        <meshStandardMaterial color="#6b4226" roughness={0.95} />
      </mesh>
      <mesh position={[-0.15, 1.2, 0]} rotation={[0, 0, lean * 0.6]} castShadow>
        <cylinderGeometry args={[0.1, 0.14, 1.2, 8]} />
        <meshStandardMaterial color="#7a5230" roughness={0.9} />
      </mesh>
      {/* Coconuts */}
      <mesh position={[-0.25, 1.7, 0.1]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#5a3d1a" roughness={0.8} />
      </mesh>
      <mesh position={[-0.2, 1.65, -0.1]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color="#5a3d1a" roughness={0.8} />
      </mesh>
      {/* Palm Leaves (individual fronds) */}
      <group ref={leavesRef} position={[-0.25, 1.9, 0]}>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <mesh key={i} rotation={[0.5, (angle * Math.PI) / 180, -0.3]} position={[0, 0, 0]} castShadow>
            <coneGeometry args={[0.08, 1.2, 4]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#228b22' : '#2d9f2d'}
              roughness={0.7}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ─── Animated Fish ─── */
function Fish({ startPos, speed = 1, color = '#ff6347' }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = startPos[0] + Math.sin(t) * 4;
    ref.current.position.z = startPos[2] + Math.cos(t) * 2.5;
    ref.current.position.y = startPos[1] + Math.sin(t * 3) * 0.05;
    ref.current.rotation.y = Math.atan2(Math.cos(t) * 4, -Math.sin(t) * 2.5);
  });
  return (
    <group ref={ref} position={startPos}>
      <mesh>
        <sphereGeometry args={[0.12, 8, 6]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.2]}>
        <coneGeometry args={[0.08, 0.18, 3]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
    </group>
  );
}

/* ─── Beach Ball ─── */
function BeachBall({ position }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.4;
    ref.current.position.y = position[1] + Math.sin(t * 1.2) * 0.12;
  });
  return (
    <group ref={ref} position={position}>
      <mesh castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#ff4757" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <sphereGeometry args={[0.351, 32, 32, 0, Math.PI]} />
        <meshStandardMaterial color="#ffd93d" transparent opacity={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* ─── Seagull ─── */
function Seagull({ startPos, speed = 0.5 }) {
  const ref = useRef();
  const wing1 = useRef();
  const wing2 = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = startPos[0] + Math.sin(t) * 10;
    ref.current.position.z = startPos[2] + Math.cos(t) * 6;
    ref.current.position.y = startPos[1] + Math.sin(t * 1.5) * 0.8;
    ref.current.rotation.y = Math.atan2(Math.cos(t) * 10, -Math.sin(t) * 6) + Math.PI;
    const flap = Math.sin(state.clock.elapsedTime * 5) * 0.6;
    wing1.current.rotation.z = flap;
    wing2.current.rotation.z = -flap;
  });
  return (
    <group ref={ref} position={startPos}>
      <mesh>
        <capsuleGeometry args={[0.05, 0.2, 4, 8]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.6} />
      </mesh>
      <mesh ref={wing1} position={[0.12, 0.02, 0]}>
        <boxGeometry args={[0.35, 0.015, 0.1]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.6} />
      </mesh>
      <mesh ref={wing2} position={[-0.12, 0.02, 0]}>
        <boxGeometry args={[0.35, 0.015, 0.1]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.6} />
      </mesh>
    </group>
  );
}

/* ─── Beach Umbrella ─── */
function Umbrella({ position }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.04, 0.04, 2.5, 8]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.25, 0]} castShadow>
        <coneGeometry args={[1.2, 0.6, 16]} />
        <meshStandardMaterial color="#ff6b6b" roughness={0.5} />
      </mesh>
      {/* Stripe */}
      <mesh position={[0, 1.22, 0]} castShadow>
        <coneGeometry args={[1.21, 0.61, 16, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#fff" transparent opacity={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

/* ─── Beach Towel ─── */
function BeachTowel({ position, color = '#4D96FF' }) {
  return (
    <mesh position={position} rotation={[-0.15, 0.3, 0]} receiveShadow>
      <boxGeometry args={[1.2, 0.03, 2]} />
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}

/* ─── Small Rocks ─── */
function Rocks() {
  return (
    <group>
      {[[3, -1.4, -2, 0.25], [3.4, -1.5, -1.4, 0.15], [-3.5, -1.5, 1.5, 0.2], [4, -1.55, 0.5, 0.12]].map(
        ([x, y, z, s], i) => (
          <mesh key={i} position={[x, y, z]} castShadow>
            <dodecahedronGeometry args={[s, 0]} />
            <meshStandardMaterial color={i % 2 === 0 ? '#8e8e8e' : '#6b6b6b'} roughness={0.9} />
          </mesh>
        )
      )}
    </group>
  );
}

/* ─── Camera ─── */
const cameraPositions = {
  '/': [0, 2, 12],
  '/m1/c1': [0, 2, 12],
  '/m1/c2': [-6, 3, 10],
  '/m2/c1': [6, 3, 8],
  '/m2/c2': [0, 6, 6],
};

function CameraRig({ currentPath }) {
  const { camera } = useThree();
  const targetPos = useMemo(() => {
    const pos = cameraPositions[currentPath] || cameraPositions['/'];
    return new THREE.Vector3(...pos);
  }, [currentPath]);

  useFrame(() => {
    camera.position.lerp(targetPos, 0.02);
    camera.lookAt(0, -0.5, 0);
  });

  return null;
}

/* ─── Main Export ─── */
export default function Background3D({ currentPath }) {
  let sunAzimuth = 0.25;
  let sunElevation = 0.3;
  let turbidity = 8;
  let rayleigh = 2;

  if (currentPath === '/' || currentPath === '/m1/c1') {
    sunElevation = 0.15; sunAzimuth = 0.15; turbidity = 10; rayleigh = 3;
  }
  if (currentPath === '/m1/c2') {
    sunElevation = 0.6; sunAzimuth = 0.25; turbidity = 6; rayleigh = 1;
  }
  if (currentPath === '/m2/c1') {
    sunElevation = 0.08; sunAzimuth = 0.75; turbidity = 20; rayleigh = 4;
  }
  if (currentPath === '/m2/c2') {
    sunElevation = -0.05; sunAzimuth = 0.5; turbidity = 30; rayleigh = 0.5;
  }

  const isNight = currentPath === '/m2/c2';

  return (
    <Canvas shadows camera={{ position: [0, 2, 12], fov: 45 }} dpr={[1, 1.5]}>
      {/* Realistic sky */}
      <Sky
        sunPosition={[
          Math.cos(sunAzimuth * Math.PI * 2) * 100,
          Math.sin(sunElevation * Math.PI) * 100,
          Math.sin(sunAzimuth * Math.PI * 2) * 100,
        ]}
        turbidity={turbidity}
        rayleigh={rayleigh}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Lighting */}
      <ambientLight intensity={isNight ? 0.15 : 0.4} color={isNight ? '#4a6fa5' : '#ffeedd'} />
      <directionalLight
        position={[8, 12, 5]}
        intensity={isNight ? 0.1 : 2}
        color={isNight ? '#6688bb' : '#fff5e0'}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Warm fill light */}
      <pointLight position={[-5, 3, 3]} intensity={isNight ? 0.05 : 0.5} color="#ffaa55" />
      {/* Environment for reflections */}
      <Environment preset={isNight ? 'night' : 'sunset'} />

      <CameraRig currentPath={currentPath} />

      {/* Realistic reflective ocean */}
      <Ocean />
      <WaveRipples />

      {/* Island with float for gentle bob */}
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.25}>
        <SandIsland />
        <PalmTree position={[-2, -1.5, -1]} lean={0.2} scale={1} />
        <PalmTree position={[-3.2, -1.5, 0.8]} lean={-0.12} scale={0.85} />
        <PalmTree position={[3.5, -1.5, -0.5]} lean={0.1} scale={0.7} />
        <BeachBall position={[-0.8, -1.2, 2.8]} />
        <Umbrella position={[2, -1.5, 2]} />
        <BeachTowel position={[1.2, -1.45, 2.3]} color="#4D96FF" />
        <Rocks />
      </Float>

      {/* Sea life */}
      <Fish startPos={[2, -2.35, 5]} speed={0.7} color="#ff6347" />
      <Fish startPos={[-3, -2.35, 4.5]} speed={0.5} color="#ffd93d" />
      <Fish startPos={[0, -2.35, 6.5]} speed={0.9} color="#00b4d8" />

      {/* Seagulls */}
      <Seagull startPos={[0, 4, -3]} speed={0.35} />
      <Seagull startPos={[6, 5.5, -5]} speed={0.25} />
      <Seagull startPos={[-4, 4.5, -6]} speed={0.3} />

      {/* Volumetric clouds */}
      <Cloud position={[-12, 5, -18]} speed={0.2} opacity={0.6} width={8} />
      <Cloud position={[14, 7, -14]} speed={0.15} opacity={0.4} width={6} color="#ffeedd" />
      <Cloud position={[0, 6, -15]} speed={0.1} opacity={0.3} width={10} />
    </Canvas>
  );
}
