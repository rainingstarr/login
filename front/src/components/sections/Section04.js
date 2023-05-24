import { Link } from "react-router-dom";

function Section04 () {
    return(
        <>
            <div className='section_04 sections'>
                <div className='width_con'>
                    <div className='box_con'>
                        <div className='title left'><h2>언제 어디서나, 3D 뷰어</h2></div>
                        <div className='row'></div>
                        <div className='desc left'><h5>
                        설계한 건축물을 3차원 공간에서 체험하세요.<br></br><br></br>

                        어려운 도면 대신, 3D지만 이미지 대신, 값비싼 뷰어 프로그램 대신!<br></br>
                        손쉬운 접근으로 직관적인 내용을 확인할 수 있습니다.<br></br><br></br>

                        URL 링크 전달만으로 인터넷이 가능한 곳 어디서든 접속 가능합니다. <br></br>
                        대면 미팅, VR 체험, 재질 변경 모두 가능합니다.<br></br><br></br>

                        지금 바로 확인하세요!!
                        </h5></div>
                        <Link className="btns btn_a">3D 웹사이트 보러가기<img src={process.env.PUBLIC_URL+"images/section_03/image_btn_01.svg"}></img></Link>
                    </div>
                </div>
                <div className="image_box"><img src={process.env.PUBLIC_URL+"images/section_04/image_01.png"}></img></div>
            </div>
        </>
    )
}

export default Section04;