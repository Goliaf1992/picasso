import { Html } from "@react-three/drei";

export const Spinner = () => {
  return (
    <Html center>
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </Html>
  );
};
