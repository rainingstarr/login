import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login(props){
    const [visitor,setVisitor] = useState({today:0, total:0});
    const naver = props.naver;
    const Kakao = props.Kakao;
    const navigate = useNavigate();
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
            Kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID);
        }
    }


    function loginWithKakao() {
        Kakao.Auth.authorize({
        redirectUri: process.env.REACT_APP_KAKAO_CALLBACK_URL,
        });
    }

    function checkVisitor(){
        axios({
            method: 'get',
            url: 'http://localhost:8080/visitor',
        }).then((response) => {
            console.log(response.data);
            if(response.data.today === undefined){
                response.data.today = 1;
            }
            setVisitor(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }
    
    useEffect(()=>{
        initializeNaverLogin();
        initializeKaKaoLogin();
        checkVisitor()
    },[]);
      
    function login(){
        const form = document.loginForm;
        axios({
            method: 'post',
            url: process.env.REACT_APP_LOGIN_SERVER_URL,
            data: {
                id: form.id.value,
                pw: form.pw.value,
            }
        }).then((response) => {            
            sessionStorage.setItem('user', JSON.stringify(response.data));
            navigate('/');
        }).catch((error) => {
            alert(error.response.data);
        });

    }

    return(
        <>  
            <div className="wrap">                
                <div>로그인</div>
                <form name="loginForm">
                    <input type="text" placeholder="아이디 (이메일)" name="id"/>
                    <input type="password" placeholder="비밀번호" name="pw"/>
                    <div onClick={login} style={{border: 'solid 2px #000' , width : '60px' , margin : '20px 0 0 0' , cursor : 'pointer'}}>로그인</div>
                </form>
                <div id="naverIdLogin" style={{marginBottom : 20+'px',marginTop : 20+'px'}}></div>
                <div id="kakao-login-btn" onClick={loginWithKakao}>
                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
                </div>
                <Link to="/join">회원가입</Link>

                <div style={{marginTop:'60px'}}>
                    일한 횟수
                    <div>today : {visitor.today}</div>
                    <div>total : {visitor.total}</div>
                </div>
        </div>
        </>
    )

    
}

export default Login;