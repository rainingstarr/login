import { Link } from "react-router-dom";

function Section06 () {
    return(
        <>
            <div className='section_06 sections'>
                <div className="left_line"></div>
                <div className="image"></div>
                <div className="propmate_con"><img className="propmate" src={process.env.PUBLIC_URL+"images/section_06/image_02.svg"}></img></div>
                <div className="top_con">
                    <div className="text_con">
                        <div className="mail">
                            <span>Mail</span>
                            <span>propmate.it@gmail.com</span>
                        </div>
                        <div className="ir">
                            <span>IR</span>
                            <span>pdf.download</span>
                        </div>
                    </div>
                </div>
                <div className='bottom_con'>
                    <div className='boxes one_box'>
                        <span className="right top text_align_right">
                            <h5>
                                PROPMATE<br></br>
                                Architecture<br></br>
                                All-in-one platform
                            </h5>
                        </span>

                    </div>
                    <div className='boxes two_box'>
                        <span className="left bottom">
                            <h5>
                                37º479365’’N 126º930869’’E
                            </h5>
                        </span>
                        <span className="right bottom text_align_right">
                            <h5>
                                대표 | 고호준<br></br>
                                개인정보 관리 책임자 | 윤주원<br></br>
                                사업자등록번호 | 628-40-00876<br></br>
                            </h5>
                        </span>                        
                    </div>
                    <div className='boxes three_box'>
                        <span className="left bottom">
                            <h5>
                                회사소개<br></br>
                                이용약관<br></br>
                                개인정보처리방침<br></br>
                                위치기반 서비스 이용약관
                            </h5>
                        </span>
                        <span className="right bottom text_align_right">
                            <h5>
                                2023ⓒ<br></br>
                                PROPMATE Corporation.All Rights Reserved. 
                            </h5>
                        </span>                        
                    </div>
                </div>
                <div className='bottom_line'></div>
            </div>
        </>
    )
}

export default Section06;