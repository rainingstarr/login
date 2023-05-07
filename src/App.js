import Login from './components/Login.js'
import NaverLogin from './components/NaverLogin.js'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin.js';
import Main from './components/Main.js';
import { useState } from 'react';

function App() {
  const [naver,setNaver]=useState(window.naver);
  const [Kakao,setKakao]=useState(window.Kakao);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Login" element={<Login naver={naver} Kakao={Kakao}/>}></Route>
        <Route path="/naverLogin" element={<NaverLogin naver={naver}/>}></Route>
        <Route path="/KakaoLogin" element={<KakaoLogin Kakao={Kakao}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
