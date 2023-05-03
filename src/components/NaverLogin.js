import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Login(){
    const location = useLocation();

    const getNaverToken = () => {
        if (!location.hash) return;
        const status = {
            access_token : location.hash.split('=')[1].split('&')[0],
            state : location.hash.split('=')[2].split('&')[0],
            token_type : location.hash.split('=')[3].split('&')[0],
            expires_in : location.hash.split('=')[4].split('&')[0],

        }
        const token = status.access_token
        console.log(status);
        axios.post(`${process.env.REACT_APP_SERVER_API}/user/naver-login`,{
            token
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

export default Login;