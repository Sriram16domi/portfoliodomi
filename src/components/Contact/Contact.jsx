import React from 'react'
import image1 from '../../assets/Projectimg-4.webp'
import './Contact.css'
const Contact = () => {
return (
    <>
    <h1 className='text-gray-500 font-medium text-4xl ml-2 mt-2'>Contact <span className='text-white'>Me</span></h1>
    <div className=' border-white p-4 flex flex-col md:flex-row justify-around h-full w-full'>
        <img className='h-full w-full lg-w-1/2' src={image1} alt="" />
        <form className='h-full w-full lg-w-1/2 p-2 flex-col justify-center'>
            <div className='flex flex-col'>
                <label className='text-white text-lg'>Name</label>
                <input type="text" className='border-2 border-gray-500 rounded-md p-2 w-3/4' placeholder='Enter your name' />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-white text-lg'>Email</label>
                <input type="email" className='border-2 border-gray-500 rounded-md p-2 w-3/4' placeholder='Enter your email' />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-white text-lg'>Message</label>
                <textarea className='border-2 border-gray-500 rounded-md p-2 w-3/4' placeholder='Type your message here'></textarea>
            </div>
            <button type="submit" className='mt-4 bg-red-500 text-white p-2 rounded-md'>Send Message</button>
        </form>

    </div>
    <div>
        <h1 className='text-white text-3xl'>Contact Me On <span className='text-gray-300'>Social Media</span> </h1>
    </div>
    </>
       
)
}

export default Contact