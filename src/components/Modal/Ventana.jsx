import React from 'react'
import './Modal.css'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  close:{opacity:0},
  open:{opacity:1}
}

const Modal = ({showModal, setShowmodal, component}) => {

  return (
    <AnimatePresence>
        {showModal&&(
            <motion.div variants={variants} initial="close" animate="open" className='fixed items-center justify-center flex flex-col z-[999] top-0 left-0 bg-[rgba(0,0,0,0.2)] w-full h-[100vh]'>
              <div className='flex w-full items-end justify-end'>
                <button className=' items-end w-24 p-2 sm:mr-32 mr-4 justify-end rounded-lg bg-[#ff2525]' onClick={(prev) => setShowmodal(!prev) }>X CLOSE</button>
              </div>
                <motion.div initial={{scale:0}} animate={{scale:1}} className='bg-[#fff] sm:w-4/5 w-[95%] h-5/6 text-[#000] px-2 py-4 rounded-lg overflow-auto'>
                    {component}
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal