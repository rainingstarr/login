import React from 'react';

function Section02 ({setScrollIndex , outerDivRef}){
    const clickFunction = (e) => {
        const index = parseInt(e.currentTarget.getAttribute('index'));        
        setScrollIndex(index + 2);
        console.log(index + 2);
        outerDivRef.current.style = `transform: translateY(-${window.innerHeight * (index + 1)}px)`;
    }

    return(
        <>
            <div className='section_02 sections'>
                <div className='width_con'>
                    <ul className='three_con'>
                        <li onClick={clickFunction} index={1}>
                            <div className='title'><h2>지도 기반 토지정보 확인 시스템</h2></div>
                            <div className='row'></div>
                            <div className='desc'><h4>원하는 땅을 찾아보세요<br></br>얼마에 어떤 건물을 지을 수 있는지 직접 확인하세요.</h4></div>
                            <div className='image'><img src={process.env.PUBLIC_URL+"images/ratio_1x1.png"}></img></div>
                        </li>
                        <li onClick={clickFunction} index={2}>
                            <div className='title'><h2>언제 어디서나, 3D Viewer</h2></div>
                            <div className='row'></div>
                            <div className='desc'><h4>Web기반의 3D뷰어로,<br></br>언제 어디서나 여러분의 계획안을 직관적으로 확인하세요.</h4></div>
                            <div className='image'><img src={process.env.PUBLIC_URL+"images/ratio_1x1.png"}></img></div>
                        </li>
                        <li onClick={clickFunction} index={3}>
                            <div className='title'><h2>집 짓는데 필요한 필수 정보 컨설팅</h2></div>
                            <div className='row'></div>
                            <div className='desc'><h4>집을 짓기에 필요한 수많은 궁금증<br></br>언제든 물어보고 결정하세요.</h4></div>
                            <div className='image'><img src={process.env.PUBLIC_URL+"images/ratio_1x1.png"}></img></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Section02;