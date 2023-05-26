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
  useEffect(() => {
    const resize = () => {
      const pageHeight = window.innerHeight;
      outerDivRef.current.style.height = `${pageHeight}px`;
      outerDivRef.current.style.transform = `translateY(-${pageHeight * (scrollIndex - 1)}px)`;
    };
    const wheelHandler = (e) => {
      e.preventDefault();
      if(scrolling) return;
      const map = outerDivRef.current.querySelector('.section_03 .map');
      const mapWidth = map.offsetWidth;
      const pageWidth = window.innerWidth;
      const deltaY = e.deltaY;//마우스 휠에서의 수직방향 스크롤 변화량
      const pageHeight = window.innerHeight;//현재page의 height가져옴
      if(scrollIndex == 3){
        const newLeft = parseInt(map.style.left || '0') - deltaY;
        if(200 >=newLeft && newLeft >= pageWidth-mapWidth){
          map.style.left = `${newLeft}px`;
          return false;
        }
      }
      scrolling = true;
      const scrollIndexChange = deltaY > 0 ? 1 : -1;//휠다운이냐 휠업이냐
      const newScrollIndex =
        (scrollIndex + scrollIndexChange + pages.length - 1) % pages.length + 1;//페이지 순환 (마지막 페이지에서 내리면 위로올라가는걸 만들기위한 노~력)

      const scrollToTop = pageHeight * (newScrollIndex - 1);
      outerDivRef.current.style = `transform: translateY(-${scrollToTop}px)`;
      setScrollIndex(newScrollIndex);
      if(newScrollIndex == 1){
        outerDivRef.current.parentElement.classList.add("white");
      }else{
        outerDivRef.current.parentElement.classList.remove("white");
      }
      setTimeout(() => {
        scrolling = false;
      }, 500);

      
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    window.addEventListener('resize',resize);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
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