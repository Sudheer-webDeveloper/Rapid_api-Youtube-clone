import React from "react";
import { useLocation } from "../../context/LocationContext";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "../Loader/Loader";

const AllVideos = () => {
  const { videos } = useLocation();

  return (
    <section className="main-videos">
      {videos.map((video, index) => {
        return (
          <div key={index}>
            {!video ? (
              <Loader />
            ) : (
              <main key={index}>
                {/* // here we are filtering seperating our concerns like if in the object have videoId then only send them to to the VideoCard component and at the same time if a object have channelId then that only send to the ChannelCard component */}

                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard ChannelDetail={video} />}
              </main>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default AllVideos;
