import { useState } from "react";
import "./navbar.css";
import { logo, Vector, Search } from "../../assets";
import JoinGroup from "../JoinGroup/JoinGroup";

const Navbar = () => {
  const [model, setModel] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-div">
            <img src={logo} alt="logo" />
          </div>

          <div className="search-div">
            <img src={Search} alt="search" />
            <p>Search for your favorite groups in ATG</p>
          </div>

          <div className="link-div" >
            <p>
              Create account{" "}
              <span style={{ color: "#2F6CE5", cursor: "pointer" }} onClick={() => setModel(!model)}>It's free!</span>
            </p>
            <div className="vector">
              <img src={Vector} alt="vector" />
            </div>
          </div>
        </div>
      </nav>
      {model && <JoinGroup />}
    </>
  );
};

export default Navbar;
