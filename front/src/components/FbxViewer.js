import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function Model() {
  const fbx = useLoader(FBXLoader, '/images/test.fbx');
  return <primitive object={fbx} position={[0, 0, 0]} scale={0.1} />;
}

function App() {
  return (
    <div style={{ width: '100vw', height: '50vh' }}>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;