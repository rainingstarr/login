import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Square = () => {
  const torusRef = useRef();
  useFrame(() => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.01;
  });

  return (
    <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} ref={torusRef}>
      <boxGeometry args={[3000, 3000, 3000]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}


// const GLTFModel = () => {
//   const gltfRef = useRef();

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load('/images/scene.glb', (gltf) => {
//       gltf.scene.position.set(0, 0, 100000);
//       gltfRef.current.add(gltf.scene);
//     });
//   }, []);

//   return <group ref={gltfRef} />;
// };

const Example = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.8} position={[5, 10, 5]} />
      <Square />
      {/* <GLTFModel /> */}
      <OrbitControls />
      <OrthographicCamera
        makeDefault
        zoom={.1}
        top={2000}
        bottom={-2000}
        left={3000}
        right={-3000}
        near={1}
        far={2000}
        position={[0, 2000, 1000]}
      />
    </Canvas>
  );
};

export default Example;
