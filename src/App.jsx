import React from "react";
import Nav from "./Nav/Nav";
import Cursor from "./Cursor/Cursor";
import Home from "./Pages/Home/Home";
import BackgroundMask from "./BackgroundMask";

const App = () => {
  return (
    <>
      <Nav />
      <Cursor />
      <Home />
      <BackgroundMask />
    </>
  );
};

export default App;
