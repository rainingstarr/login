import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function NaverLogin(props){
    const navigate = useNavigate();
    const location = useLocation();
    

    const getNaverToken = () => {
        if (!location.hash) return;
      
        // URL의 해시 값에서 접근 토큰 정보 추출
        const accessToken = location.hash.split('=')[1].split('&')[0];
        axios({
          method: 'post',
          url: process.env.REACT_APP_NAVER_SERVER_URL,
          data: {
            accessToken: accessToken
          }
        }).then((response) => {
          sessionStorage.setItem('user', JSON.stringify(response.data));
          navigate('/');
        }).catch((error) => {
          console.log(error);
          alert(error);
          navigate('/');
        });
      
    }

    
    useEffect(()=>{
        getNaverToken();
    },[]);
      

    return(
        <>
            <div className="wrap">
                <div>로딩중..</div>
                
            </div>
        </>
    )

    
}

export default NaverLogin;