"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

// ─── 3D COMPONENTS ───

function SewingMachine({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  const needleRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    // Moving it away as we move toward the closet
    group.current.position.y = THREE.MathUtils.lerp(0, 10, gsap.utils.clamp(0, 1, (progress - 0.2) * 5));
    group.current.visible = progress < 0.4;

    // Needle oscillation
    if (needleRef.current && progress > 0.1 && progress < 0.4) {
      needleRef.current.position.y = 0.5 + Math.sin(clock.getElapsedTime() * 40) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Stylized Sewing Machine Base */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[2, 0.2, 1]} />
        <meshStandardMaterial color="#F7C8D0" roughness={0.3} />
      </mesh>
      {/* Arm */}
      <mesh position={[-0.8, 0.4, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.4]} />
        <meshStandardMaterial color="#F7C8D0" roughness={0.3} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 0.4, 0.4]} />
        <meshStandardMaterial color="#F7C8D0" roughness={0.3} />
      </mesh>
      {/* Needle area */}
      <mesh ref={needleRef} position={[0.7, 0.5, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.6]} />
        <meshStandardMaterial color="silver" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

function FabricConstruction({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Act 2: 0.3 to 0.7
  const actProgress = gsap.utils.clamp(0, 1, (progress - 0.3) * 2.5);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.visible = progress > 0.2 && progress < 0.8;
    
    // Animate individual "slabs" to come together
    groupRef.current.children.forEach((child, i) => {
      const offset = i * 0.1;
      const p = gsap.utils.clamp(0, 1, (actProgress - offset) * 1.5);
      
      // Slabs fly in from sides and stack
      child.position.x = THREE.MathUtils.lerp(i % 2 === 0 ? -5 : 5, 0, p);
      child.position.z = THREE.MathUtils.lerp(2, 0, p);
      child.rotation.x = THREE.MathUtils.lerp(Math.PI / 2, 0, p);
      child.scale.setScalar(THREE.MathUtils.lerp(0.1, 1, p));
    });
    
    groupRef.current.rotation.y = actProgress * 0.5;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Representing dress parts: Front, Back, Sleeves */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, -i * 0.1, 0]}>
          <boxGeometry args={[1.5, 0.05, 1]} />
          <meshStandardMaterial 
            color="#D88C9A" 
            roughness={0.9} 
            transparent 
            opacity={0.9} 
          />
        </mesh>
      ))}
    </group>
  );
}

function BoutiqueCloset({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  
  // Act 3: 0.7 to 1.0
  const actProgress = gsap.utils.clamp(0, 1, (progress - 0.7) * 3.33);

  return (
    <group ref={group} position={[0, THREE.MathUtils.lerp(-10, 0, actProgress), 0]} visible={progress > 0.6}>
      {/* Wooden Rack */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[4.2, 0.1, 0.1]} />
        <meshStandardMaterial color="#3D2B1F" roughness={0.4} /> {/* More wooden brown */}
      </mesh>
      {/* Side supports */}
      <mesh position={[-2.1, 0, 0]}>
        <boxGeometry args={[0.1, 3, 0.1]} />
        <meshStandardMaterial color="#3D2B1F" roughness={0.4} />
      </mesh>
      <mesh position={[2.1, 0, 0]}>
        <boxGeometry args={[0.1, 3, 0.1]} />
        <meshStandardMaterial color="#3D2B1F" roughness={0.4} />
      </mesh>

      {/* Stylized hanging outfits */}
      {[ -1.2, -0.4, 0.4, 1.2 ].map((x, i) => (
        <group key={i} position={[x, 0.5, 0]}>
          <mesh>
            <cylinderGeometry args={[0.01, 0.01, 2]} />
            <meshStandardMaterial color="silver" />
          </mesh>
          <mesh position={[0, -0.5, 0]}>
            <coneGeometry args={[0.4, 1, 32]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#F7C8D0" : "#FCF9F6"} 
              roughness={0.9} 
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ─── MAIN SCENE ENGINE ───

function SceneContent({ progress }: { progress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    // Dynamic Camera movement
    camera.position.x = Math.sin(progress * Math.PI) * 2;
    camera.position.z = 5 + Math.cos(progress * Math.PI) * 1;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      
      <SewingMachine progress={progress} />
      <FabricConstruction progress={progress} />
      <BoutiqueCloset progress={progress} />

      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.4} 
        scale={20} 
        blur={2.4} 
        far={4.5} 
      />
    </>
  );
}

export default function HeroScene({ progress = 0 }: { progress?: number }) {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <SceneContent progress={progress} />
      </Canvas>
    </div>
  );
}
