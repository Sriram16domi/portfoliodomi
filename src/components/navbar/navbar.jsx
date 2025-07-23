import profile from "../../assets/profile - Copy.png"
import {FiCoffee } from "react-icons/fi"
import { CgNotes } from "react-icons/cg";
import { MdVideoLibrary } from "react-icons/md";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar(){
return <>
     <nav className="Navbar-Container bg-gray-900 w-1/3 md:w-1/6 flex flex-col h-screen sticky top-0">
        <div className="Navbar-left flex flex-col items-center">
           <img className="rounded-full border-2 border-red-500 w-1/2 p-1 mt-2" src={profile} alt="loading" />
           <h1 className="text-white font-bold text-xl tracking-widest uppercase font-sans">domi</h1>
           <div className="Navbar-left-heading">
            <h1 className="text-red-500 font-bold uppercase text-sm">.</h1>
           </div>
        </div>

        <ul className="navbar-list text-white font-normal capitalize mt-20">
          <li className="flex items-center"><span className="icon-alignment"><FiCoffee/></span><Link to='/'>home</Link></li>
          <li className="flex items-center"><span className="icon-alignment"><CgNotes/></span><Link to='/project'>Project</Link></li>
          <li className="flex items-center"><span className="icon-alignment"><MdVideoLibrary/></span>video</li>
          <li className="flex items-center"><span className="icon-alignment"><RiAccountPinBoxFill/></span>about</li>
          <li className="flex items-center"><span className="icon-alignment"><RiAccountPinBoxFill/></span>contact</li>
        </ul>

     </nav>
    </>
}