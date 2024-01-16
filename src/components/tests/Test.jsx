import React from 'react'
import './Test.css'

const Test = () => {
  return (
    <div className='flex flex-col h-96 w-full items-center justify-center '>
        <div id='forma' className='w-52 h-44 bg-primary'></div>
        <div id='forma2' className='w-52 h-44 -mt-16 bg-secondary'></div>
    </div>
  )
}

export default Test