import React from "react";

import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const VideoCard = ({ video, widther }) => {
  const navigate = useNavigate();
  const {
    id: { videoId },
    snippet: {
      publishedAt,
      channelId,
      channelTitle,
      description,
      publishTime,
      thumbnails,
      title,
    },
  } = video;


  return (
    <section
      className={`video-card ${widther && "similar"}`}
      key={videoId}
   
    >
      <div
        className="video-image"
        onClick={() => {
          navigate(`/video/${videoId}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className={`${widther && "for-image"}`}
        />
      </div>
      <div className="video-content">
        <h2 onClick={() => navigate(`/video/${videoId}`)}>
          {description?.slice(0, 25)}...
        </h2>
        <h3 onClick={() => navigate(`/channel/${channelId}`)}>
          {channelTitle} <span>✓</span>
        </h3>
        <div className="content">
          <h4>340K views</h4>
          <h4>{new Date(publishedAt).toLocaleDateString()}</h4>
        </div>
      </div>
    </section>
  );
};

export default VideoCard;
