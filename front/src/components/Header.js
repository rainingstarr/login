const Dot = ({ num, scrollIndex }) => {
    return (
      <div className={`dot ${scrollIndex === num ? "active" : ""}`}
      ></div>
    );
};

const Header = ({ scrollIndex ,pagesLength}) => {
    return(
        <div className="header_bg">
            <header>
                <div className={`line ${scrollIndex == 1 || scrollIndex ==6 ? "hide" : ""}`}></div>
                <input className="burger-check" type="checkbox" id="burger-check" />
                <label className="burger-icon" htmlFor="burger-check">
                <span className="burger-sticks"></span>
                </label>
                <div className="menu">
                <ul className="menu_contents">
                    <li><a href="../propmate/login.html">Log In</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Project</a></li>
                </ul>
                </div>
                <h1>
                <a href="index.html"><img src="images/propmatelogoW.png" alt="프롭메이트 로고" /></a>
                </h1>                
                <div className="dots_con" style={{ position: "fixed", top: "50%", left: 36, transform:'translateY(-50%)',zIndex:9999 }}>
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
                <div className={`side_nav_con ${scrollIndex == 1 || scrollIndex ==2 || scrollIndex ==6 ? "hide" : ""}`}>
                    <img src={process.env.PUBLIC_URL+"images/image_bg_01.svg"}></img>
                    <img src={process.env.PUBLIC_URL+"images/image_cube.svg"} className="cube" style={{top:30*(scrollIndex - 1)+'px'}}></img>
                </div>
            </header>
        </div>
    )
}

export default Header;