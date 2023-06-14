import React from "react";
import "./gallery.css";
import {
  Connect,
  Edit,
  People1,
  People2,
  People3,
  Post1,
  Post2,
  Post3,
  Vector,
  Location,
  warning,
} from "../../assets";
import { Card } from "../../components";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="tabs">
        <p style={{ color: "#000000" }}>All Posts(32)</p>
        <p>Article</p>
        <p>Event</p>
        <p>Education</p>
        <p>Job</p>
        <div className="focus-line"></div>
      </div>
      <div className="button1">
        <p>Write a Post</p>
        <img src={Vector} alt="vector" />
      </div>
      <div className="button2">
        <img src={Connect} alt="vector" />
        <p>Join Group</p>
      </div>
      <div className="line"></div>
      <div className="location">
        <img src={Location} alt="location" />
        {/* <p> Noida, India </p> */}
        <input type="text" placeholder="Noida, India" />
        <img src={Edit} alt="edit" className="edit" />
        <div className="message">
          <img src={warning} alt="warning" />
          <p>
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
      <div className="reccomend-location">
        <h1>Reccomond Groups</h1>
        <div className="profiles">
          <div className="person">
            <img src={People1} alt="people" />
            <p>Alex worna</p>
          </div>
          <button type="button">Follow</button>
        </div>
        <div className="profiles">
          <div className="person">
            <img src={People1} alt="people" />
            <p>Alex worna</p>
          </div>
          <button type="button">Follow</button>
        </div>
        <div className="profiles">
          <div className="person">
            <img src={People1} alt="people" />
            <p>Alex worna</p>
          </div>
          <button type="button" className="active">
            Followed
          </button>
        </div>
        <p className="more">See More...</p>
      </div>
      <div className="posts">
        <Card
          title="Article"
          heading="What if famous brands had regular fonts? Meet RegulaBrands!"
          paragraph="I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…"
          Post={Post1}
          People={People1}
          userName="Sarthak kamra"
        />
        <Card
          title="Education"
          heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
          paragraph="I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…"
          Post={Post2}
          People={People2}
          userName="Sarah West"
        />
        <Card
          title="Meetup"
          heading="Finance & Investment Elite Social Mixer @Lujiazui"
          paragraph="Fri, 12 Oct, 2018"
          Post={Post3}
          People={People3}
          userName='Ronal Jones'
        />
      </div>
    </div>
  );
};

export default Gallery;
