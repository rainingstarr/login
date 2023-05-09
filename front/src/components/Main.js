import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Main(){
    const [userInfo,setUserInfo] = useState(null);

    useEffect(()=>{
        setUserInfo(localStorage.getItem('user'));
    },[]);
    return(
        <>
            {userInfo === null ? <Link to="/Login">로그인 하러가기</Link>:<UserInfo setUserInfo={setUserInfo}/>}
        </>
    )
}

function UserInfo(props){
    const userInfo = JSON.parse(localStorage.getItem('user'));
    return(
        <>
        <div>
            <div onClick={()=>{localStorage.clear();props.setUserInfo(localStorage.getItem('user'));}}>로그아웃</div>
            <div>이름 : {userInfo.name}</div>
            <div>이메일 : {userInfo.email}</div>
            <div>나이 : {userInfo.age}</div>
        </div>
        </>
    )
}

export default Main;