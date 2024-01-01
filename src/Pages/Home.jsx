import React from "react";
import List from "../Components/List/List";
import Videos from "../Components/video/Video";

const Home = () => {
  return (
    <section className="grid">
      <section className="list">
        <List />
      </section>
      <section className="map">
        <Videos />
      </section>
    </section>
  );
};

export default Home;
