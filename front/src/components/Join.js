import axios from "axios";
import { useNavigate } from "react-router-dom";

function Join(){
    const navigate = useNavigate();
      
    function join(){
        const form = document.joinForm;
        axios({
            method: 'post',
            url: process.env.REACT_APP_JOIN_SERVER_URL,
            data: {
                _id: form._id.value,
                pw: form.pw.value,
                name: form.name.value,
                age: form.age.value,
            }
        }).then((response) => {
            console.log(response.data);
            alert('회원가입이 완료됬습니다.');
            navigate('/login');
        }).catch((error) => {
            alert(error.response.data);
        });

    }

    return(
        <>  
            <div className="wrap">                
                <div>회원가입</div>
                <form name="joinForm">
                    <input type="text" placeholder="이메일" name="_id"/>
                    <input type="password" placeholder="비밀번호" name="pw"/>
                    <input type="text" placeholder="나이" name="name"/>
                    <input type="text" placeholder="이름" name="age"/>
                    <div onClick={join} style={{border: 'solid 2px #000' , width : '60px' , margin : '20px 0 0 0' , corsor : 'pointer'}}>로그인</div>
                </form>          
        </div>
        </>
    )

    
}

export default Join;