import { useState, useEffect, useRef } from "react";
import '../css/common.css';
import '../css/main.css';
import '../css/responsive.css'
import Section01 from "./sections/Section01";
import Section02 from "./sections/Section02";
import Section03 from "./sections/Section03";
import Section04 from "./sections/Section04";
import Section05 from "./sections/Section05";
import Section06 from "./sections/Section06";
import Header from "./Header";
let scrolling;

function Fullpage() {
  const outerDivRef = useRef();//리액트내에서 도큐먼트 조작시에는 Ref를 사용하는게 좋음
  const [scrollIndex, setScrollIndex] = useState(1);
  
  const pages = [
    { id: 1, content: <Section01/>},
    { id: 2, content: <Section02 setScrollIndex={setScrollIndex} outerDivRef={outerDivRef}/>},
    { id: 3, content: <Section03/>},
    { id: 4, content: <Section04/>},
    { id: 5, content: <Section05/>},
    { id: 6, content: <Section06/>},
  ];
  const firstMapLeft = 0;
  useEffect(() => {
    const map = outerDivRef.current.querySelector('.section_03 .map');
    const rowLine = outerDivRef.current.parentElement.querySelector('.rowLine');
    const resize = () => {
      const pageHeight = window.innerHeight;
      outerDivRef.current.style.height = `${pageHeight}px`;
      outerDivRef.current.style.transform = `translateY(-${pageHeight * (scrollIndex - 1)}px)`;
      map.style.left = `${firstMapLeft}px`;
      rowLine.style.transform = `translate(0%,-50%)`;
    };
    const scrollEventHandler = (e) => {
      if(scrolling) return;      
      setTimeout(() => {
        scrolling = false;
      }, 500);
      const mapWidth = map.offsetWidth;
      const pageWidth = window.innerWidth;
      const deltaY = e.deltaY;//마우스 휠에서의 수직방향 스크롤 변화량
      const pageHeight = window.innerHeight;//현재page의 height가져옴
      if(scrollIndex === 3){
        const newLeft = parseInt(map.style.left || '0') - deltaY;
        if(firstMapLeft >=newLeft && newLeft >= pageWidth-mapWidth){
          map.style.left = `${newLeft}px`;
          const newLeftPercent = 100 - ((newLeft - (pageWidth-mapWidth)) / (firstMapLeft - (pageWidth-mapWidth)) * 100);
          rowLine.style.transform = `translate(${-newLeftPercent}%,-50%)`;
          return false;
        }
      }
      scrolling = true;      
      setTimeout(() => {
        scrolling = false;
      }, 500);
      const scrollIndexChange = deltaY > 0 ? 1 : -1;//휠다운이냐 휠업이냐
      const newScrollIndex = scrollIndex + scrollIndexChange;
      if(newScrollIndex ==0 || newScrollIndex > pages.length) return false;
      const scrollToTop = pageHeight * (newScrollIndex - 1);
      outerDivRef.current.style = `transform: translateY(-${scrollToTop}px)`;
      setScrollIndex(newScrollIndex);
      if(newScrollIndex === 1){
        outerDivRef.current.parentElement.classList.add("white");
      }else{
        outerDivRef.current.parentElement.classList.remove("white");
      }

      
    };
    const wheelHandler = (e) => {
      e.preventDefault();
      scrollEventHandler(e);
    };
    const touchStartHandler = (e) => {
      const touchStartY = e.touches[0].clientY;
      outerDivRef.current.dataset.touchStartY = touchStartY;
    };
    const touchEndHandler = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchStartY = outerDivRef.current.dataset.touchStartY;
      const deltaY = touchEndY - touchStartY;
      if (deltaY !== 0) {
        scrollEventHandler({ deltaY: -deltaY });
      }
    };


    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    outerDivRefCurrent.addEventListener("touchstart",touchStartHandler);


    outerDivRefCurrent.addEventListener("touchend",touchEndHandler);
    window.addEventListener('resize',resize);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      outerDivRefCurrent.removeEventListener("touchstart", touchStartHandler);
      outerDivRefCurrent.removeEventListener("touchend", touchEndHandler);
      window.removeEventListener('resize',resize);
    };
  }, [scrollIndex]);

  return (
    <>
      <Header scrollIndex={scrollIndex} pagesLength={pages.length} setScrollIndex={setScrollIndex} outerDivRef={outerDivRef}/>
      <div ref={outerDivRef} className="outer white">
        {pages.map((page, index) => (
          <div key={page.id}>
            {page.content}
          </div>
        ))}
      </div>
    </>
  );
}

export default Fullpage;