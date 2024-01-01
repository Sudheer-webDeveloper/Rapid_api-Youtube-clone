import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import VideoPage from "./Pages/VideoPage";
import ChannelPage from "./Pages/ChannelPage";
import SearchFeed from "./Pages/SearchFeed";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
         <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
