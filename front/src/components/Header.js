
function Header(){
    return(
        <div className="header_bg">
            <header>
                <div className="line"></div>
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
            </header>
        </div>
    )
}

export default Header;