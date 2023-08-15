import "./index.css"
import sun from "../../assets/sun-white.svg"
import moon from "../../assets/moon.svg"
import menu from "../../assets/menu.svg"
import cancel from "../../assets/cancel.svg"
import { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {

    const images = [sun, moon];
    const hamburgerImages = [menu, cancel];

    const [currentImage, setCurrentImage] = useState(0);
    const [hamburgerImage, setHamburgerImage] =useState(0);

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const toggleImage = () => {
        setCurrentImage(1 - currentImage);
        setTheme(currentImage ? "dark" : "light");
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setHamburgerImage( 1 - hamburgerImage);
        setIsOpen(prev => !prev);   
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    return(
            <>
                <nav className="fixed top-0 z-50 lg:pl-32 flex-1 flex justify-between lg:justify-around  items-center lg:h-[7%] h-[10%] w-full bg-bkg">
                   <h1 className="font-bold text-4xl lg:text-2xl text-content px-5 lg:px-0">#VanLife</h1>

                   <div className="hidden lg:flex text-xl text-content">
                    <NavLink to="/" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold " : "hover:text-hovering hover:font-extrabold"}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold ml-4" : "hover:text-hovering hover:font-extrabold ml-6"}>About</NavLink>
                    <NavLink to="/vans" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold ml-4" : "hover:text-hovering hover:font-extrabold ml-6"}>Vans</NavLink>                         
                    <NavLink to="/host" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold ml-4" : "hover:text-hovering hover:font-extrabold ml-6"}>Host</NavLink>
                   </div>


                    <div className="relative h-full w-28 px-2 flex items-center">
                        {/* Dark and light mode toggle */}
                        <div className=" absolute left-0 ml-2 flex-none lg:-mr-28"  onClick={toggleImage}>
                          <img className="w-10 h-10 lg:h-6" src={images[currentImage]} />  
                        </div>
                        {/* Dark and light mode toggle */}

                        <div className=" absolute right-0 mr-3 hamburger-image lg:hidden" onClick={toggleMenu}>
                            <img className="w-10 h-[40rem] lg:hidden" src={hamburgerImages[hamburgerImage]} />  
                        </div>
                    </div>


                   <div className={`${`navbar ${isOpen ? 'flex' : 'hidden'} absolute -right-2 top-28 bg-gradient-to-r from-hostUp to-hostLw text-content rounded h-[7rem] w-[6rem] flex-col items-center justify-center cursor-pointer transition delay-700 duration-300 ease-in-out `}`} onClick={toggleMenu}>
                        <NavLink to="/" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold " : "hover:text-hovering hover:font-extrabold"}>Home</NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold " : "hover:text-hovering hover:font-extrabold"}>About</NavLink>
                        <NavLink to="/vans" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold " : "hover:text-hovering hover:font-extrabold"}>Vans</NavLink>
                        <NavLink to="/host" className={({isActive}) => isActive ? "Active hover:text-hovering hover:font-extrabold " : "hover:text-hovering hover:font-extrabold"}>Host</NavLink>
                    </div>
                </nav>
            </>
    )
}

export default Navbar

