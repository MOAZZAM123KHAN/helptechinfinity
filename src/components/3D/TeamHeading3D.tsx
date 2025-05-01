
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D } from "@react-three/drei";

const TeamHeading3D = () => {
  return (
    <Canvas style={{ height: "140px" }}>
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.4}
          height={0.3}
          position={[-5.2, 0, 0]}
          bevelEnabled
          bevelSize={0.05}
          bevelThickness={0.02}
        >
          OUR TEAM MEMBERS
          <meshStandardMaterial color="#8B5CF6" metalness={0.5} roughness={0.2} />
        </Text3D>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default TeamHeading3D;
