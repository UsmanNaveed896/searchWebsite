import React from 'react'
import { motion } from 'framer-motion';
import Img from '../../assets/qwq.png'
const Popup = ({ onClose }) => {
  return (
    <motion.div
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    transition={{ duration: 0.7 }}
    className="absolute top-16 left-[30%] right-0 bg-[#404040] p-4 shadow-md rounded-xl z-[999] max-w-[500px]"
    style={{ backgroundColor: 'rgba(64, 64, 64, 0.7)' }} // Adjust the opacity here
  >
    <div className="flex justify-end">
      <button onClick={onClose} className=" text-white hover:font-bold focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div>
      <h2 className="text-lg font-semibold text-center text-white">Hello I Am Your Virtual Assistant!</h2>
      <h2 className="text-lg font-semibold text-center  text-white">How Can I Help You?</h2> {/* Fixed the typo here */}
    </div>
    <div className='flex justify-center  items-start'>
      <img className='h-[300px]' src={Img} alt='girl' />
      <input className='rounded px-2 py-1 bg-white mt-16 text-[12px] focus:outline-none' placeholder='Type Something...' type='text' />
      {/* <i className="text-[34px]  text-white fa fa-comments-o  cursor-pointer hover:font-bold" aria-hidden="true"></i> */}
    </div>
  </motion.div>
  
  )
}

export default Popup