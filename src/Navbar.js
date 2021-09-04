
import { useState } from 'react'
const Navbar = () => {
    const [isActive,setActive]=useState(false);
    const container = document.querySelector('.container');
    let hamburgerClick=()=>{
        setActive(!isActive)
    }
    return (
        <nav>
            <a className="header-logo" href="#">LOGO</a>
            <ion-icon name="menu-outline" class="hamburger" onClick={hamburgerClick}></ion-icon>
            
            <div className={isActive ? 'nav-container show':'nav-container'}>
                    <a className="navbar-logo" href="#">LOGO</a>
                    <div className="searchbar">
                        <ion-icon name="search-outline"></ion-icon>
                        <input  type="text" placeholder="Type to search something"/>
                    </div>
                    <div className="icons">
                        <div className="order">
                            <a href="#" className="nav-icon"><ion-icon name="notifications-outline"></ion-icon></a>
                            <a href="#" className="nav-icon"><ion-icon name="settings-outline"></ion-icon></a>
                            <a href="#" className="nav-user-icon"><ion-icon name="person-circle-outline"></ion-icon></a>
                        </div>
                        <div className="user-text">
                            <a href="#" className="nav-user-icon-mobile"><ion-icon name="person-circle-outline"></ion-icon></a>
                            <p>John Doe</p>
                            <p>Administrator</p>
                        </div>
                    </div>
            </div>
        </nav>
    );
}
 
export default Navbar;