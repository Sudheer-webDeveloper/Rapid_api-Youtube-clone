import React, { useEffect } from "react";
import { useLocation } from "../../context/LocationContext";
import { fetchData } from "../Utils/fetchData";
import AllVideos from "./AllVideos";

const Videos = () => {
  const { category, setCategory,setVideos,videos} = useLocation();
  
  useEffect(()=>{
    fetchData(`search?part=snippet&q=${category}`).then((data)=>setVideos(data.items))
  },[category])

  // console.log(videos)
  return (
    <section className="videos">
      <div className="video-heading">
        <h2>{category} Videos</h2>
      </div>
      <div className="videos">
       <AllVideos />
      </div>
    </section>
  );
};

export default Videos;
