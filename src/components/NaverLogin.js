import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Login(){
    const location = useLocation();

    const getNaverToken = () => {
        if (!location.hash) return;
      
        // URL의 해시 값에서 접근 토큰 정보 추출
        const accessToken = location.hash.split('=')[1].split('&')[0];
      
        // 네이버 API 호출
        axios({
          method: 'get',
          url: '/v1/nid/me',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
          .then((response) => {
            let data = response.data;
            alert(`이름 : ${data.response.name} 이메일 : ${data.response.email} 연령대 : ${data.response.age}`);
          })
          .catch((error) => {
            console.log(error);
          })
          .then(()=>{
            window.location.href = '/';
          })
          ;
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

export default Login;