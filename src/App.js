import Link from './components/Login.js'
import NaverLogin from './components/NaverLogin.js'
import './App.css';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Link/>}></Route>
        <Route path="naverLogin" element={<NaverLogin/>}></Route>
      </Routes>
    </>
  );
}

export default App;
