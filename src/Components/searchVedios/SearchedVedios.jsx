import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Utils/fetchData";
import { useLocation } from "../../context/LocationContext";
import VideoCard from "../video/VideoCard";
import Loader from "../Loader/Loader";

const SearchedVedios = () => {
  const { searchTerm } = useParams();
  const { searchVedios, setSearchVedios } = useLocation();
  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setSearchVedios(data.items)
    );
  }, [searchTerm]);

  if (searchVedios.length < 1) {
    return <Loader />;
  }

  return (
    <section className="new-specific-videos">
      {searchVedios.map((video, index) => {
        return <VideoCard video={video} key={index} />;
      })}
    </section>
  );
};

export default SearchedVedios;
