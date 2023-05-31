import { Link } from "react-router-dom";

function Section03 () {
    return(
        <>
            <div className='section_03 sections'>
                <div className='width_con'>
                    <div className="map" style={{left:'0'}}><img src={process.env.PUBLIC_URL+"images/section_03/image_01.jpg"}></img></div>
                    <div className='box_con'>
                        <div className='title left'><h2>지도 기반 토지정보</h2></div>
                        <div className='row'></div>
                        <div className='desc left'><h5>
                            원하는 땅을 직접 찾아보세요.<br></br><br></br>

                            토지가 가진 토지 이용 규제정보, 각종 법령 정보를 
                            종합하여 클릭만으로 쉽게 확인해볼 수 있습니다.<br></br><br></br>

                            대한민국 어디든 원하는 땅을 찾아, <br></br>
                            땅이 가진 정보를 눈으로 확인해 보세요.<br></br>
                            원하는 토지에 어떤 건축물을 지을 수 있는지,<br></br>
                            어느 정도 규모의 건물을 건축할 수 있는지,<br></br>
                            해당 크기의 건축을 하려면 어느 정도의 비용이 소요되는지,<br></br>
                            초기 건축 자본은 얼마가 필요한지 등을<br></br><br></br>

                            여러분이 직접 확인하시고 건축하세요!
                        </h5></div>
                        <Link className="btns btn_a">지도 보러가기<img src={process.env.PUBLIC_URL+"images/section_03/image_btn_01.svg"}></img></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section03;