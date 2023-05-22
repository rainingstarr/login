import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Main(){
    const [userInfo,setUserInfo] = useState(null);

    useEffect(()=>{
        setUserInfo(sessionStorage.getItem('user'));
    },[]);
    return(
        <>
            {userInfo === null ? <div><Link to="/Login">로그인 하러가기</Link> <Link to="/landing">랜딩페이지로 가기</Link></div>:<UserInfo setUserInfo={setUserInfo}/>}
        </>
    )
}

function UserInfo(props){
    const userInfo = JSON.parse(sessionStorage.getItem('user'));
    return(
        <>
        <div>
            <div style={{cursor:'pointer'}} onClick={()=>{sessionStorage.clear();props.setUserInfo(sessionStorage.getItem('user'));} }>로그아웃</div>
            <div>이름 : {userInfo.name}</div>
            <div>이메일 : {userInfo._id}</div>
            <div>나이 : {userInfo.age}</div>
        </div>
        </>
    )
}

export default Main;