import { useState, useEffect, useRef } from "react";
import Dots from "./Dots";
import "../App.css";
import Landing from "./Landing";

const DIVIDER_HEIGHT = 5;
const pages = [
  { id: 1, content: "page 1" },
  { id: 2, content: "page 2" },
  { id: 3, content: "page 3" },
  { id: 4, content: "page 4" },
  { id: 5, content: "page 5" },
  { id: 6, content: "page 6" },
];

function Fullpage() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      const scrollIndexChange = deltaY > 0 ? 1 : -1;
      const newScrollIndex =
        (scrollIndex + scrollIndexChange + pages.length - 1) % pages.length + 1;

      const scrollToTop =
        pageHeight * (newScrollIndex - 1) + DIVIDER_HEIGHT * (newScrollIndex - 1);
      outerDivRef.current.scrollTo({
        top: scrollToTop,
        left: 0,
        behavior: "smooth",
      });
      setScrollIndex(newScrollIndex);
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [scrollIndex]);

  return (
    <div ref={outerDivRef} className="outer">
      <Dots scrollIndex={scrollIndex} />
      <Landing scrollIndex={scrollIndex} />
      {pages.map((page, index) => (
        <div key={page.id}>
          {index > 0 && <div className="divider"></div>}
          <div className={`inner bg-${index + 2}`}>{page.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Fullpage;