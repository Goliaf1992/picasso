/// <reference types="three" />

import { JSX } from "@react-three/fiber";

declare module "@react-three/fiber" {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: JSX.IntrinsicElements["mesh"];
      directionalLight: JSX.IntrinsicElements["mesh"];
      primitive: any;
    }
  }
}
