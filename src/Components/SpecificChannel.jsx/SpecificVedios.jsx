import React from "react";
import { useLocation } from "../../context/LocationContext";
import VideoCard from "../video/VideoCard";

const SpecificVedios = () => {
  const { specificChannelVideos } = useLocation();

  return (
    <section className="new-specific-videos">
      {specificChannelVideos.map((video, index) => {
       return(
        <VideoCard video={video} key={index} />
       )
      })}
    </section>
  );
};

export default SpecificVedios;
