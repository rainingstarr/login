import React, { useState } from 'react';
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
            <div className={`section_01 sections  ${bgClass}`}>
                <div className="width_con">
                <h1>집을 짓는 새로운 방식, 프롭메이트</h1>
                <ul className="wrap1_info">
                    {items.map((item, index) => (
                    <li key={index}>
                        <div className='desc' onMouseEnter={() => {handleMouseEnter(index);}} onMouseLeave={handleMouseLeave}>
                        <h3>{item.title}</h3>
                        <h4>{item.description}</h4>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </main>
    </>
  );
}


export default Section01;