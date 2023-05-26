const Header = ({ scrollIndex ,pagesLength ,setScrollIndex ,outerDivRef}) => {
    
    const clickFunction = (e) => {
        const index = parseInt(e.currentTarget.getAttribute('index'));        
        setScrollIndex(index + 1);
        console.log(index);
        outerDivRef.current.style = `transform: translateY(-${window.innerHeight * index}px)`;
    }
    return(
        <div className="header_bg">
            <div className="width_con">
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
                        <div className={`side_nav_con ${scrollIndex == 1 || scrollIndex ==2 || scrollIndex ==6 ? "hide" : ""}`}>
                            {Array(pagesLength).fill(0).map((item,index)=>{
                                return  <div key={index} index={index} className='dot' onClick={clickFunction}></div>
                            })}
                            <img src={process.env.PUBLIC_URL+"images/image_bg_01.svg"} className="background"></img>
                            <img src={process.env.PUBLIC_URL+"images/image_cube.svg"} className="cube" style={{top:30*(scrollIndex - 1)+'px'}}></img>
                        </div>
                </header>
            </div>
        </div>
    )
}

export default Header;