import React from "react";
import { categories } from "../Utils/Constants";
import { useLocation } from "../../context/LocationContext";


const List = () => {
  const { category, setCategory } = useLocation();
  // console.log(category);

  return (
    <section className="video-menu">
      {categories.map((cate, index) => (
        <div
          key={index}
          className={`type ${category === cate.name ? "setting" : ""}`}
          onClick={() =>{ setCategory(cate.name)
            window.scrollTo({top:0,behavior:"smooth"})
          }}
        >
          <h2>{cate.icon}</h2>
          <h4>{cate.name}</h4>
        </div>
      ))}
    </section>
  );
};

export default List;
