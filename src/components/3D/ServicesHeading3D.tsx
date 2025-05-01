
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Stars } from "@react-three/drei";

const ServicesHeading3D = () => {
  return (
    <Canvas style={{ height: "120px" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.2}
          height={0.2}
          position={[-2.5, 0, 0]}
        >
          Our Services
          <meshStandardMaterial color="#6366f1" />
        </Text3D>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default ServicesHeading3D;
