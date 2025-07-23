import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";
import { SiNetflix } from "react-icons/si";
import { SiPrime } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import './heromain.css'

import ModernWebPage from "../../assets/modern-website-design-img.jpg"
export default function Heromain(){
    return<>
    <div className="Heromain-container text-white h-screen bg-h grid md:grid-cols-2 gap-2 p-2 m-4">
        <div className="grid grid-cols-2 gap-2 p-2">
            <div className="smmaingrid"><h1 className="text-4xl font-bold">100+</h1><p className="text-sm capitalize tracking-widest text-gray-400">completed projects</p></div>
            <div className="smmaingrid"><h1 className="capitalize text-2xl font-semibold pr-5">webflow expert</h1></div>
            <div className="smmaingrid"><h1 className="text-4xl font-bold">50+</h1><p className="text-sm capitalize tracking-widest text-gray-400">satisfied clients</p></div>
            <div className="smmaingrid"><h1 className="text-4xl font-bold">6 <span className="text-sm">years</span></h1> <p className="text-sm capitalize tracking-widest text-gray-400">design experience</p></div>
        </div>
        <div className="flex flex-col items-start justify-center bg-slate-900 rounded-2xl">
            <h1 className="p-4 text-2xl capitalize">your ultimate webflow partner</h1>
            <p className="px-4 pb-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi rerum, voluptate neque ipsum quidem. Perspiciatis ut similique repudiandae, illum dolor aperiam accusantium officia! Ut consectetur qui impedit odio iste?</p>
            <button className="text-sm p-4 capitalize text-red-500 flex items-center">get in touch <span><FaAngleDoubleRight className="text-red-500 ml-2 mt-1"/></span></button>
                
        </div>
        <div className="maingrid flex items-center justify-center flex-col">

            <div className="text-center">
                <h1 className="p-2 text-2xl capitalize">fearured plan</h1>
                <p className="flex items-center ml-6">view all <span><FaAngleDoubleRight className="text-red-500 ml-2 mt-1"/></span></p>
            </div>
            
            <img className="w-4/5 p-3 grayscale-70"src={ModernWebPage} alt="Loading" />

        </div>
        <div className="maingrid flex flex-col items-center justify-between">

            <h1 className="text-2xl capitalize pt-4">trusted by</h1>

            <div className="grid  grid-cols-3 gap-3 h-4/6 w-4/6">

              <button><FaCcAmazonPay className="h-4/6 w-4/6 "/></button>
              <button><FaFacebook className="h-4/6 w-4/6"/></button>
              <button><FaGooglePay className="h-4/6 w-4/6"/></button>
              <button><SiPrime className="h-4/6 w-4/6"/></button>
              <button><SiNetflix className="h-4/6 w-4/6"/></button>
              <button><TfiMicrosoftAlt className="h-4/6 w-4/6"/></button>

        </div>
      </div>
    </div>
    </>
}