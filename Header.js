import React from "react"

function Header(){
    return (
        <header>
            <nav className="nav">
                <img src="./reactjs-iconlogo.png" className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>      
    )
    
}

export default Header