import React, { useEffect } from "react";
import { fetchData } from "../Utils/fetchData";
import { useParams } from "react-router-dom";
import { useLocation } from "../../context/LocationContext";
import SpecificDetail from "../SpecificChannel.jsx/SpecificDetail";
import SpecificVedios from "../SpecificChannel.jsx/SpecificVedios";



const ChannelDetail = () => {
  const { id } = useParams();
  const {
    setSpecificChannelVideos,
    specificChannelVideos,
    setChannelDetail,
    channelDetail,
  } = useLocation();
  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );

    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setSpecificChannelVideos(data?.items)
    );
  }, [id]);

  // console.log("channeldetal",channelDetail);
  // console.log("specific schanlles videos",specificChannelVideos)

  if(!specificChannelVideos){
    return <h1>loading...</h1>
  }

  return (
    <>
        <SpecificDetail />
        <SpecificVedios />
    </>
  );
};

export default ChannelDetail;
