import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Login(){
    const {naver} = window;
    const initializeNaverLogin = () => {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: 'J2xHfO20WDwfqBunRdMI',
        callbackUrl: 'http://localhost:3000/naverLogin', 
        isPopup: false, // popup 형식으로 띄울것인지 설정
        loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
      });
      naverLogin.init();
    };
    
    useEffect(()=>{
        initializeNaverLogin();
    },[]);
      

    return(
        <>
            <div className="wrap">
                <div>안녕</div>
                <div id="naverIdLogin"></div>
                
            </div>
        </>
    )

    
}

export default Login;