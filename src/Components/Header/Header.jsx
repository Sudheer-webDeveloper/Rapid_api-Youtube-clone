import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("")
    }
  };



  return (
    <nav className="navbar">
      <div className="content">
        <h1 onClick={()=>navigate('/')} style={{cursor:"pointer"}}>YouTube</h1>
      </div>

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movies, Series"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={{ background: "none", border: "none", outline: "none" }} type="submit">
          <h3>
            <LuSearch />
          </h3>
        </button>
      </form>
    </nav>
  );
};

export default Header;
