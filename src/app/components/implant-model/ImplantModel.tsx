"use client";

import { OrbitControls } from "@react-three/drei";
import { useMemo, useState } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Spinner } from "../spinner/Spinner";
import { Bounds } from '@react-three/drei';

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      primitive: any;
      group: any;
    }
  }
}

type ImplantModelProps = {
  urls: { base: string; extra: string }; // Base model + extra layer
  showExtra: boolean;
};

const ImplantModel: React.FC<ImplantModelProps> = ({ urls, showExtra }) => {
  const dracoLoader = useMemo(() => {
    const loader = new DRACOLoader();
    loader.setDecoderPath('/draco/'); // Set the path to the Draco decoder
    return loader;
  }, []);

  const baseGltf = useLoader(GLTFLoader, urls.base, loader => {
    loader.setDRACOLoader(dracoLoader);
  });
  const extraGltf = useLoader(GLTFLoader, urls.extra, loader => {
    loader.setDRACOLoader(dracoLoader);
  });

  const baseScene = useMemo(() => clone(baseGltf.scene), [baseGltf]);
  const extraScene = useMemo(() => clone(extraGltf.scene), [extraGltf]);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 2]} intensity={3} />
      <Bounds fit clip observe margin={1.5}>
        {/* Base Model */}
        <primitive 
          position={[0, -45, 0]} 
          object={baseScene} 
          scale={0.8} 
          rotation={[0, 0, Math.PI / 4]} // Adjusted initial Z-axis rotation
        />
        {/* Extra Layer Model (conditionally rendered) */}
        {showExtra && (
          <primitive 
            position={[0, -45, 0]} 
            object={extraScene} 
            scale={0.8} 
            rotation={[0, 0, Math.PI / 4]} // Adjusted initial Z-axis rotation
          />
        )}
      </Bounds>

      {/* Ensure OrbitControls is properly configured */}
      <OrbitControls 
        makeDefault 
        enableZoom={true}  // Enable zoom
        enablePan={false}  // Disable panning
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 1.5}
      />
    </group>
  );
};

const ImplantModelWithSuspense: React.FC<{ urls: { base: string; extra: string } }> = ({ urls }) => {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Toggle button stays outside of Canvas */}
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-white text-black rounded shadow-md z-10"
        onClick={() => setShowExtra((prev) => !prev)}
      >
        Toggle Layer
      </button>

      <Canvas
        className="bg-grey absolute top-0 left-0 w-full h-full cursor-grab"
        camera={{ position: [0, 0, 5], fov: 50 }} // Increased FOV for better zoom
      >
        <Suspense fallback={<Spinner />}>
          <ImplantModel urls={urls} showExtra={showExtra} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ImplantModelWithSuspense;