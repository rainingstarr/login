import * as THREE from "three";
import React, { useEffect, useRef } from 'react';
import { Canvas,useFrame} from 'react-three-fiber';
import gsap from "gsap";

const Cube = (prop) => {
  const cubeRef = useRef(null);

  // useFrame((state)=>{
  //   if(!cubeRef.current){
  //     return;
  //   }
  //   const elapsedTime = state.clock.getElapsedTime();
  //   cubeRef.current.rotation.y += .1;
  //   state.camera.lookAt(cubeRef.current.position);
  // })

  useEffect(() => {
    if (!cubeRef.current) {
      return;
    }
    gsap.to(cubeRef.current.position, { duration: 1, delay: 1, x: 2 });
    gsap.to(cubeRef.current.position, { duration: 1, delay: 2, x: 0 });
  }, []);

  return (
    // mesh: 3D공간에 표시할 메쉬.
    // 즉, 3D오브젝트의 형태와 재질을 합한 것이라고 이해하면 된다.
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#e91e63" />
    </mesh>

  );
};

const Example = () => {
  return (
    <Canvas camera={{ position: [1, 1, 3]}} style={{width:'100%',height:'100vh'}}>
      <Cube/>
      <axesHelper/>
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