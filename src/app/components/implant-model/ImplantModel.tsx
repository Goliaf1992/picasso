"use client";

import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Spinner } from "../spinner/Spinner";

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
  url: string;
};

const ImplantModel: React.FC<ImplantModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const clonedScene = clone(gltf.scene);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 2]} intensity={1} />
      <Bounds fit clip observe margin={1.5}>
        <primitive position={[0, -45, 0]} object={clonedScene} scale={0.8} />
      </Bounds>
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
      />
    </group>
  );
};

const ImplantModelWithSuspense: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Canvas
      className="bg-grey absolute top-0 left-0 w-full h-full"
      camera={{ position: [0, 0, 5], fov: 10 }}
    >
      <Suspense fallback={<Spinner />}>
        <ImplantModel url={url} />
      </Suspense>
    </Canvas>
  );
};

export default ImplantModelWithSuspense;
