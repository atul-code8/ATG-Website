import React, { useState } from "react";
import { Gallery, Header, Navbar } from "./components";

const App = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Gallery />
    </div>
  );
};

export default App;
