import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const Square = () => {
  const torusRef = useRef();
  useFrame(() => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.01;
  });

  return (
    <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} ref={torusRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}


const FbxModel = () => {
  const fbxRef = useRef();

  // useFrame(() => {
  //   if (fbxRef.current) {
  //     fbxRef.current.rotation.y += 0.01;
  //   }
  // });

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load('/images/test.fbx', (fbx) => {
      fbx.position.set(0, 0, 1000);
      fbxRef.current.add(fbx);
    });
  }, []);

  return <group ref={fbxRef} />;
};

const Example = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.8} position={[5, 10, 5]} />
      <Square />
      <FbxModel />
      <OrbitControls />
      <OrthographicCamera
        makeDefault
        zoom={.1}
        top={200}
        bottom={-200}
        left={300}
        right={-300}
        near={1}
        far={2000}
        position={[0, 0, 1000]}
      />
    </Canvas>
  );
};

export default Example;



















// import React, { Suspense } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// function Model() {
//   const fbx = useLoader(FBXLoader, '/images/test.fbx');
//   return <primitive object={fbx} position={[0, 0, 0]} scale={0.1} />;
// }

// function App() {
//   return (
//     <div style={{ width: '100vw', height: '50vh' }}>
//       <Canvas>
//         <Suspense fallback={null}>
//           <Model />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// export default App;