import { useEffect } from "react";


function Login(props){
    const naver = props.naver;
    const Kakao = props.Kakao;    
    const clientId = "184475419089-8t0uo3rhhpl49q13miefais9tpgeftbh.apps.googleusercontent.com";
    const initializeNaverLogin = () => {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: 'J2xHfO20WDwfqBunRdMI',
        callbackUrl: 'http://localhost:3000/naverLogin', 
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
                <div>안녕</div>
                <div id="naverIdLogin"></div>
                <div id="kakao-login-btn" onClick={loginWithKakao}>
                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
                </div>                
                <div id="g_id_onload"
                    data-client_id="184475419089-8t0uo3rhhpl49q13miefais9tpgeftbh.apps.googleusercontent.com"
                    data-login_uri="http://localhost:3000"
                    data-auto_prompt="false">
                </div>
                <div className="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="sign_in_with"
                    data-shape="rectangular"
                    data-logo_alignment="left">
                </div>
                
        </div>
        </>
    )

    
}

export default Login;