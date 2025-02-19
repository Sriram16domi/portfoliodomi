import { FaAngleDoubleRight } from "react-icons/fa";

export default function Hero(){
    return<>
     <div>
        
        <div className="flex items-end justify-between">
            
          <div className="text-white  text-3xl font-small capitalize pt-5 pl-10">
            <h1>webflow <span className="text-gray-500">development</span></h1>
            <h1>subscription services</h1>
          </div>    

          <h1 className="text-white flex items-center pr-4 text-large capitalize">subscribe now <FaAngleDoubleRight className="text-red-500 mt-1 ml-1"/></h1>
        
        </div>

     </div>
     </>
}