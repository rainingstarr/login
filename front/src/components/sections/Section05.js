import { Link } from "react-router-dom";

function Section05 () {
    return(
        <>
            <div className='section_05 sections'>
                <div className='width_con'>
                    <div className='box_con'>
                        <div className='title left'><h2>집 짓는데 필요한 필수 정보 컨설팅</h2></div>
                        <div className='row'></div>
                        <div className='desc left'><h5>
                            집을, 혹은 건물을 짓는데 전문가의 도움 없이는 불가능합니다. <br></br><br></br>

                            나에게 꼭 맞는 집을 짓기에 필요한 각 분야 전문가들이 상시 대기 중입니다.<br></br>
                            건축설계, 인허가, 시공, 인테리어, 금융 등 <br></br>
                            해당 전문가에게 직접 물어보고 결정하세요.<br></br><br></br>

                            고객 맞춤의 이해하기 쉽고 단순한 용어로 변환하여 설명해 드립니다.<br></br>
                            부담 없이 언제든 연락주세요!
                        </h5></div>
                        <Link className="btns btn_a">컨설팅 받아보기<img src={process.env.PUBLIC_URL+"images/section_03/image_btn_01.svg"}></img></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section05;