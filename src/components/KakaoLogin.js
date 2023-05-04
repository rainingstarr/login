import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function KakaoLogin(props){
    const location = useLocation();
    const Kakao = props.Kakao;
    const initializeKaKaoLogin = () => {
        if(!Kakao.isInitialized()){
            Kakao.init('a0def8921a761ad8f9c1e52a810fab83');
        }
    }


    const getKakaoToken = () => {
        if (!location.search) return;
      
        // URL의 해시 값에서 접근 토큰 정보 추출
        const authorizationCode = location.search.split('=')[1].split('&')[0];
        axios({
            method: 'post',
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: {
                grant_type: 'authorization_code',
                client_id: 'a0def8921a761ad8f9c1e52a810fab83',
                redirect_uri: 'http://localhost:3000/KakaoLogin',
                code: authorizationCode,
            }  
        })
        .then((response) => {
            console.log(response.data.access_token);
            axios({
                method: 'get',
                url: 'https://kapi.kakao.com/v2/user/me',
                headers: {
                    'Authorization': `Bearer ${response.data.access_token}`,
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            })
            .then((response) => {
                let data = response.data;
                const user ={
                    name: data.properties.nickname,
                    email: data.kakao_account.email,
                    age: data.kakao_account.age_range
                }
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
            })
            .catch((error) => {
                console.log(error);
            })

        })
        .catch((error) => {
          console.log(error);
        });
    }

    
    useEffect(()=>{
        initializeKaKaoLogin();
        getKakaoToken();
    },[]);
      

    return(
        <>
            <div className="wrap">
                <div>로딩중..</div>
                
            </div>
        </>
    )

    
}


export default KakaoLogin