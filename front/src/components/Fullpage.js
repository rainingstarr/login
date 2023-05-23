import { useState, useEffect, useRef } from "react";
import Dots from "./Dots";
import '../css/common.css';
import '../css/main.css';
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Header from "./Header";
const pages = [
  { id: 1, content: <Section01/> },
  { id: 2, content: <Section02/> },
  { id: 3, content: <Section03/>},
  { id: 4, content: <div className='section_04 sections'><div className='width_con'>section_04</div></div> },
  { id: 5, content: <div className='section_05 sections'><div className='width_con'>section_05</div></div> },
  { id: 6, content: <div className='section_06 sections'><div className='width_con'>section_06</div></div> },
];
let scrolling;

function Fullpage() {
  const outerDivRef = useRef();//리액트내에서 도큐먼트 조작시에는 Ref를 사용하는게 좋음
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const map = outerDivRef.current.querySelector('.section_03 .map');
      const mapWidth = map.offsetWidth;
      const pageWidth = window.innerWidth;
      const deltaY = e.deltaY;//마우스 휠에서의 수직방향 스크롤 변화량
      const pageHeight = window.innerHeight;//현재page의 height가져옴
      if(scrollIndex == 3){
        const newLeft = parseInt(map.style.left || '0') - deltaY;
        if(0 >=newLeft && newLeft >= pageWidth-mapWidth){
          map.style.left = `${newLeft}px`;
          return false;
        }
      }
      if(scrolling) return;
      scrolling = true;
      const scrollIndexChange = deltaY > 0 ? 1 : -1;//휠다운이냐 휠업이냐
      const newScrollIndex =
        (scrollIndex + scrollIndexChange + pages.length - 1) % pages.length + 1;//페이지 순환 (마지막 페이지에서 내리면 위로올라가는걸 만들기위한 노~력)

      const scrollToTop =
        pageHeight * (newScrollIndex - 1)
      outerDivRef.current.scrollTo({
        top: scrollToTop,
        left: 0,
        behavior: "smooth",
      });
      setScrollIndex(newScrollIndex);
      if(newScrollIndex == 1){
        outerDivRef.current.classList.add("white");
      }else{
        outerDivRef.current.classList.remove("white");
      }
      setTimeout(() => {
        scrolling = false;
      }, 500);

      
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [scrollIndex]);

  return (
    <div ref={outerDivRef} className="outer white">
      <Header/>
      <Dots scrollIndex={scrollIndex} pagesLength={pages.length} />
      {pages.map((page, index) => (
        <div key={page.id}>
          {page.content}
        </div>
      ))}
    </div>
  );
}

export default Fullpage;