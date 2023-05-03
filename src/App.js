import Link from './components/Login.js'
import './App.css';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Link/>}></Route>
      </Routes>
    </>
  );
}

export default App;
