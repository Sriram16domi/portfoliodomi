import image1 from "../src/assets/Projectimg-1.webp"
import image2 from '../src/assets/Projectimg-2.webp'
import image3 from '../src/assets/Projectimg-3.webp'
import image4 from '../src/assets/Projectimg-4.webp'
import './app-2.css'


export default function Project() {
   return (<>
      <div className=''>
         <h1 className='text-4xl capitalize p-4 mb-4 text-white'>all projects</h1>
         <div className='Project-gridcontainer grid grid-cols-2 text-white gap-2'>


            <div className='projectgrids'>
               <img className='projectgridimg' src={image2} alt="" />

               <ul className='flex'>
                  <li className='projectliststyle'>webflow</li>
                  <li className='projectliststyle'>adobe xd</li>
                  <li className='projectliststyle'>jquery</li>
               </ul>

               <p className='ml-4 capitalize text-2xl'>E commerse</p>

            </div>

            <div className='projectgrids '>
               <img className='projectgridimg' src={image3} alt="" />

               <ul className='flex'>
                  <li className='projectliststyle'>React js</li>
                  <li className='projectliststyle'>tailwind css</li>
                  <li className='projectliststyle'>Node js</li>
               </ul>

               <p className='ml-4 capitalize text-2xl'>start up websites</p>

            </div>

            <div className='projectgrids '>

               <img className='h-[60%] w-full' src={image4} alt="" />

               <ul className='flex'>
                  <li className='projectliststyle'>webflow</li>
                  <li className='projectliststyle'>adobe xd</li>
                  <li className='projectliststyle'>fs attributes</li>
                  
               </ul>

               <p className='ml-2 capitalize text-2xl'>personal portfolio</p>

            </div>

            <div className='projectgrids'>

               <img className='projectgridimg' src={image1} alt="Loading Img" />

               <ul className='flex'>
                  <li className='projectliststyle'>webflow</li>
                  <li className='projectliststyle'>adobe xd</li>
                  <li className='projectliststyle'>fs attributes</li>
                  <li className='projectliststyle'>jquery</li>
               </ul>

               <p className='ml-4 capitalize text-2xl'>moder musem website</p>

            </div>

            <div className='projectgrids'>
               <img className='projectgridimg' src={image2} alt="" />

               <ul className='flex'>
                  <li className='projectliststyle'>webflow</li>
                  <li className='projectliststyle'>adobe xd</li>
                  <li className='projectliststyle'>jquery</li>
               </ul>

               <p className='ml-4 capitalize text-2xl'>E commerse</p>

            </div>

            <div className='projectgrids '>
               <img className='projectgridimg' src={image3} alt="" />

               <ul className='flex'>
                  <li className='projectliststyle'>React js</li>
                  <li className='projectliststyle'>tailwind css</li>
                  <li className='projectliststyle'>Node js</li>
               </ul>

               <p className='ml-4 capitalize text-2xl'>start up websites</p>

            </div>

            <div className='projectgrids '>

               <img className='h-[60%] w-full' src={image4} alt="" />

               <ul className='flex'>
                  <li className='projectliststyle'>webflow</li>
                  <li className='projectliststyle'>adobe xd</li>
                  <li className='projectliststyle'>fs attributes</li>
                  <li className='projectliststyle'>jquery</li>
               </ul>

               <p className='ml-4 capitalize text-2xl'>personal portfolio</p>

            </div>


         </div>
      </div>
   </>)
}