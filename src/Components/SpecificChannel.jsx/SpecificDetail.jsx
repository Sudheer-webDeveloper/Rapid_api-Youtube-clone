import React from 'react'
import { useLocation } from '../../context/LocationContext'


const SpecificDetail = () => {
    const {channelDetail} = useLocation()

   if(!channelDetail){
    return <h1>loading...</h1>
   }
  return (
    <>
      <section className="specific-card">
        <div className="image">
            <img src={channelDetail?.brandingSettings?.image.bannerExternalUrl} alt={""} />
        </div>
        <div className="content">
            <div className="specific-image">
                <img src={channelDetail?.snippet?.thumbnails.high.url} alt="" />
            </div>
           <div className="specific-content">
            <h2>{channelDetail?.snippet?.title}</h2>
            <h3>{channelDetail?.snippet?.customUrl}</h3>
            <p>{channelDetail?.snippet?.description}</p>
           </div>
        </div>
      </section>
    </>
  )
}

export default SpecificDetail
