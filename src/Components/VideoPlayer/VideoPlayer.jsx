import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchData } from "../Utils/fetchData";
import { useLocation } from "../../context/LocationContext";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import VideoCard from "../video/VideoCard";
import Loader from "../Loader/Loader";

const VideoPlayer = () => {
  const { id } = useParams();
  // console.log("id from vedio ", id);
  const { playingVideo, setPlayingVideo, similarVideos, setSimilarVideos } =
    useLocation();

  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setPlayingVideo(data.items[0])
    );
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setSimilarVideos(data.items)
    );
  }, [id]);

  // console.log("similarVideos", similarVideos);

  if (!playingVideo?.snippet) {
    return <Loader />;
  }

  return (
    <section className="video-player">
      <div className="playing">
        <div className="react-player">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            className="react-player"
          />
        </div>
        <div className="video-playing-content">
          <h2>{(playingVideo?.snippet?.title).slice(0, 90)}...</h2>
        </div>

        <div className="engage">
          <button>
            <span>
              <AiOutlineLike />
            </span>{" "}
            {parseInt(playingVideo?.statistics?.viewCount).toLocaleString()}{" "}
          </button>
          <button>
            <span>
              <GrView />{" "}
            </span>{" "}
            {parseInt(playingVideo?.statistics?.likeCount).toLocaleString()}{" "}
          </button>
        </div>
      </div>

      <div className="similar-videos">
        {similarVideos?.map((video, index) => {
          return <VideoCard video={video} key={index} widther="video" />;
        })}
      </div>
    </section>
  );
};

export default VideoPlayer;

// https://www.youtube.com/watch?v=JqwkfUnDx3Q
