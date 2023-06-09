import './App.css';
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login.js';
import NaverLogin from './components/NaverLogin.js';
import KakaoLogin from './components/KakaoLogin.js';
import Main from './components/Main.js';
import Join from './components/Join.js'
import Draft from './components/Draft.js';
import './css/reset.css';
import './css/common.css';
import Fullpage from './components/Fullpage.js';
import FbxViewer from './components/FbxViewer.js';
import GltfViewer from './components/GltfViewer.js';

function App() {
  const [naver]=useState(window.naver);
  const [Kakao]=useState(window.Kakao);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Login" element={<Login naver={naver} Kakao={Kakao}/>}></Route>
        <Route path="/naverLogin" element={<NaverLogin naver={naver}/>}></Route>
        <Route path="/KakaoLogin" element={<KakaoLogin Kakao={Kakao}/>}></Route>
        <Route path="/join" element={<Join/>}></Route>
        <Route path="/draft" element={<Draft/>}></Route>
        <Route path="/landing" element={<Fullpage/>}></Route>
        <Route path="/fbxviewer" element={<FbxViewer/>}></Route>
        <Route path="/gltfViewer" element={<GltfViewer/>}></Route>
      </Routes>
    </>
  );
}

export default App;
