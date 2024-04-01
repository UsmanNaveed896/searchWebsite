import React from 'react'
import { motion } from 'framer-motion';
import Img from '../../assets/qwq.png'
const Popup = ({ onClose }) => {
  return (
    <motion.div
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    transition={{ duration: 0.7 }}
    className="absolute top-16 left-[30%] right-0 bg-white p-4 shadow-md rounded-xl z-[999] max-w-[500px]"
  >
    <div className="flex justify-end">
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div>
    <h2 className="text-lg font-semibold text-center">Hello I Am Your Virtual Assistant!</h2>
    <h2 className="text-lg font-semibold text-center">How I Can help You?</h2>
    </div>
    <div className='flex justify-center gap-16 items-end'>
        <img className='h-[300px]' src={Img} alt='girl' />
        <i class="text-[34px] fa fa-comments-o text-[#2355a9] cursor-pointer hover:font-bold" aria-hidden="true"></i>
    </div>
    <div className='flex justify-end'>
   
    </div>
  </motion.div>
  )
}

export default Popup