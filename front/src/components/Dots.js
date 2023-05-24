const Dot = ({ num, scrollIndex }) => {
    return (
      <div className={`dot ${scrollIndex === num ? "active" : ""}`}
      ></div>
    );
  };
  
  const Dots = ({ scrollIndex ,pagesLength}) => {
    return (
      <div className="dots_con" style={{ position: "fixed", top: "50%", left: 100, transform:'translateY(-50%)',zIndex:9999 }}>
        <div className="dots"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: 20,
          }}
        >
        {Array(pagesLength).fill(0).map((item,index)=>{
          return <Dot key={index} num={index+1} scrollIndex={scrollIndex}></Dot>
        })}
        </div>
      </div>
    );
  };
  
  export default Dots;