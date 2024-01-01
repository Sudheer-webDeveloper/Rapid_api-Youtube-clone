import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const LoactionContextProvider = ({ children }) => {
  const [category, setCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState([]);
  const [specificChannelVideos, setSpecificChannelVideos] = useState([]);
  const [searchVedios, setSearchVedios] = useState([]);
  const [playingVideo, setPlayingVideo] = useState([]);
  const [similarVideos, setSimilarVideos] = useState([]);

  return (
    <LocationContext.Provider
      value={{
        category,
        setCategory,
        videos,
        setVideos,
        channelDetail,
        setChannelDetail,
        specificChannelVideos,
        setSpecificChannelVideos,
        searchVedios,
        setSearchVedios,
        playingVideo,
        setPlayingVideo,
        similarVideos,
        setSimilarVideos,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
