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
            const user = {
              name: data.response.name,
              email: data.response.email,
              age: data.response.age
            }
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
          })
          .catch((error) => {
            console.log(error);
            alert(error);
            navigate('/');
          })
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