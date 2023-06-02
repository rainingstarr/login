import * as THREE from "three";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas,useFrame} from 'react-three-fiber';
import { OrbitControls } from "@react-three/drei";

const Cube = (prop) => {
  const cubeRef = useRef(null);

  useFrame((state)=>{
    if(!cubeRef.current){
      return;
    }
    state.camera.position.x = prop.cursor.x * 10;
    state.camera.position.y = prop.cursor.y * 10;
  })

  useEffect(() => {
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

const PerspectiveCamera = () =>{  
  const [cursor,setCursor] = useState({x:0,y:0});
  const changeCursorHandler = (event)=>{
    setCursor({      
      x: event.clientX / 1000 - 0.5,
      y: event.clientY / 1000 - 0.5,
    })
  }
  return (
      <Canvas
        // camera={{
        //   position: [1, 1, 3],
        //   fov: 75,
        //   near: 0.1,
        //   far: 100,
        // }}
        orthographiccamera={{
          zoom: 300,
          position: [2, 2, 2],
          left: -1,
          right: 1,
          top: 1,
          bottom: -1,
          near: 0.1,
          far: 100,
        }}
        style={{width:'1000px',height:'1000px'}}
        // onPointerMove={(event)=>changeCursorHandler(event)}
        
      >
        <OrbitControls 
          target={[0, -1, 0]} 
          enableDamping={true}           
        // target: 카메라의 주시점. x, y, z 축 순으로 설정할 수 있다.
        // enableDamping: true를 설정할 경우, 드래그 시의 애니메이션을 부드럽게 한다. 디폴트 값은 false.
        />
        <Cube cursor={cursor}/>        
        <axesHelper/> 
      </Canvas>
  );
}

export default PerspectiveCamera;