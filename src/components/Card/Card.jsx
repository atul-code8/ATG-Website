import "./card.css";
import { Threedot, visibility, Share } from "../../assets";
import { useState } from "react";

const Card = ({ title, heading, paragraph, Post, People, userName }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="card">
      <div className="card-image">{Post && <img src={Post} alt="post" />}</div>
      <div className="card-content">
        <h2 className="subHeading">{title}</h2>
        <h1 className="heading">{heading}</h1>
        <p className="paragraph">{paragraph}</p>
        <div
          className="threeDot"
          onClick={() => {
            setToggle(!toggle);
            
          }}
          
        >
          <img src={Threedot} alt="threedot" />
        </div>
        {toggle && (
          <div className="menu">
            <p>Edit</p>
            <p>Report</p>
            <p>Option</p>
          </div>
        )}

        <div className="options">
          <div className="user">
            <img src={People} alt="People" />
            <h2 className="user-name">{userName}</h2>
          </div>
          <div className="views">
            <img src={visibility} alt="visi" />
            <p>1.4k views</p>
          </div>
          <div className="share">
            <img src={Share} alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
