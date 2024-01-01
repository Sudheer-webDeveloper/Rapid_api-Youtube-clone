import React from 'react'
import loader from '../../assets/Loader.mp4'

const Loader = () => {
  return (
    <div className='loader'>
    <video src={loader} loop autoPlay></video>
    </div>
  )
}

export default Loader
