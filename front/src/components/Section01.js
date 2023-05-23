import React, { useState } from 'react';
import '../css/common.css';
import '../css/main.css';
function Section01 () {
    const [bgClass, setBgClass] = useState('');
    var timeoutId = null;
    
    const items = [
        {
          title: '오직 당신만을 위한 최적화된 디자인',
          description: '단 하나의 디자인을 만들어 냅니다. 고객 만족을 최우선으로한 프롭메이트만의 디자인을 체험해보세요.',
        },
        {
          title: '엄선된 전문 업체로 최상의 시공성',
          description: '다양한 포트폴리오를 가진 최고의 업체와 함께합니다. 그들의 작품을 감상해보세요.',
        },
        {
          title: '고객 예산에 맞춘 금융 컨설팅',
          description: '고객 예산안에 최적화된 자금 활용 방안을 확인해보세요. 언제든 상담해 드립니다.',
        },
    ];
    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setBgClass('');
        }, 500);
    };

    const handleMouseEnter = (index) => {
        clearTimeout(timeoutId);
        setBgClass(`change_bg${index + 1}`);
    };

    return (
    <>
        <main>
        <div className={`wrap1_bg ${bgClass}`}>
            <div className="wrap1">
            <h2>집을 짓는 새로운 방식, 프롭메이트</h2>
            <ul className="wrap1_info">
                {items.map((item, index) => (
                <li key={index}>
                    <div className='desc' onMouseEnter={() => {handleMouseEnter(index);}} onMouseLeave={handleMouseLeave}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </main>
        {/* <div className="footer_bg">
        <footer>
            <ul className="footer_info">
            <li>회사명 | 프롭메이트</li>
            <li><address>주소 | 서울시 광진구 광나루로 478 L101호</address></li>
            <li>대표 | 고호준</li>
            <li>개인정보 관리 책임자 | 윤주원</li>
            <li>사업자등록번호 | 628-40-00876</li>
            </ul>
            <ul className="footer_link">
            <li><a href="#">회사소개</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">위치기반 서비스 이용약관</a></li>
            </ul>
            <p>Copyright 2022 propmate Co. Ltd. all rights reserved.</p>
        </footer>
        </div> */}
    </>
  );
}


export default Section01;