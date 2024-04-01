import React from 'react'
import LoadingImage from '../assests/loader.svg'

const Loading = () => {
  return (
    <div className='flex items-center justify-center px-16 py-0'>
      <img src={LoadingImage} alt="" className='w-28'/>
    </div>
  )
}

export default Loading
