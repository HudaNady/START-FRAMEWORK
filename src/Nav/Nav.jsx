import React, { useEffect ,useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    let [scroll, setScroll] = useState(false)
    useEffect(() => {
        let handleScroll = () => {
            if (window.scrollY > 10) {
              setScroll(true);
            } else {
              setScroll(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])
    
    return <>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${scroll ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand text-white fw-bolder fs-2" to="/">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive?"activ nav-link px-2 me-3 ":"nav-link px-2 me-3"} to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive?"activ nav-link px-2 me-3 ":"nav-link px-2 me-3"} to="portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive?"activ nav-link px-2 me-3 ":"nav-link px-2 me-3"} to="contact">CONTACT</NavLink>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
    </>
}
