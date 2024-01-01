import React from "react";
import { useNavigate } from "react-router-dom";

const ChannelCard = ({ ChannelDetail }) => {
  console.log("channelDetail", ChannelDetail);
  const navigate = useNavigate();

  const {
    id: { channelId },
    snippet: {
      publishedAt,
      channelTitle,
      description,
      publishTime,
      thumbnails,
      title,
    },
  } = ChannelDetail;

  return (
    <section
      className="video-card"
      key={channelId}
      onClick={() => navigate(`/channel/${channelId}`)}
    >
      <div className="video-image">
        <img src={thumbnails?.medium?.url} alt={title} />
      </div>
      <div className="video-content">
        <h2>{description.slice(0, 25)}...</h2>
        <h3>
          {channelTitle} <span>✓</span>
        </h3>
        <div className="content">
          {ChannelDetail?.statistics?.subscriberCount && (
            <h3>
              {parseInt(
                ChannelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
            </h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChannelCard;
