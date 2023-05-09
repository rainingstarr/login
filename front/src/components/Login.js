import { useEffect } from "react";

function Login(props){
    const naver = props.naver;
    const Kakao = props.Kakao;
    const initializeNaverLogin = () => {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
        callbackUrl: process.env.REACT_APP_NAVER_CALLBACK_URL, 
        isPopup: false, // popup 형식으로 띄울것인지 설정
        loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
      });
      naverLogin.init();
    };

    const initializeKaKaoLogin = () => {
        if(!Kakao.isInitialized()){
            Kakao.init('a0def8921a761ad8f9c1e52a810fab83');
        }
    }


    function loginWithKakao() {
        Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/KakaoLogin',
        });
    }    
    
    useEffect(()=>{
        initializeNaverLogin();
        initializeKaKaoLogin();
    },[]);
      

    return(
        <>  
            <div className="wrap">
                <div>로그인</div>
                <div id="naverIdLogin"></div>
                <div id="kakao-login-btn" onClick={loginWithKakao}>
                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
                </div>                
        </div>
        </>
    )

    
}

export default Login;