import { useState } from "react";
import  "./Nav.css"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
        <nav>
            <div className="nav-info">
                <div className="logo">
                    <p>chris.</p>
                </div>
                <ul className={`links ${isOpen? 'open-links' : ''}`}>
                    <li className='about'>
                        <a href="">About</a>
                    </li>
                    <li className='skills'>
                        <a href="">Skills</a>
                    </li>
                    <li className='projects'>
                        <a href="">Projects</a>
                    </li>
                    <li className='contact'>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </nav>
    </>
  )
}
