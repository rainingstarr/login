import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function KakaoLogin(props){
    const navigate = useNavigate();
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
                client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
                redirect_uri: process.env.REACT_APP_KAKAO_CALLBACK_URL,
                code: authorizationCode,
            }  
        }).then((response) => {
            axios({
                method: 'post',
                url: process.env.REACT_APP_KAKAO_SERVER_URL,
                data: {
                accessToken: response.data.access_token,
                }
            }).then((response) => {
            sessionStorage.setItem('user', JSON.stringify(response.data));
            navigate('/');
            }).catch((error) => {
            console.log(error);
            alert(error);
            navigate('/');
            });
        }).catch((error) => {
            console.log(error);
            alert(error);
            navigate('/');
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