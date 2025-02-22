"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";

type ImplantModelProps = {
  url: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      primitive: any;
    }
  }
}

const ImplantModel: React.FC<ImplantModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  const clone = useMemo(() => scene.clone(), [scene]);
  console.log("Loaded scene:", scene);
  return (
    <Canvas
      className="bg-grey absolute top-0 left-0 w-full h-full"
      camera={{ position: [0, 0, 5], fov: 10 }}
    >
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 2]} intensity={1} />

      {/* Контейнер для модели */}
      <Bounds fit clip observe margin={1.5}>
        <primitive position={[0, -45, 0]} object={clone} scale={0.8} />
      </Bounds>

      {/* Управление камерой */}
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
};

export default function ImplantModelWithSuspense({ url }: { url: string }) {
  return (
    <Suspense fallback={<div>Загрузка модели...</div>}>
      <ImplantModel url={url} />
    </Suspense>
  );
}
