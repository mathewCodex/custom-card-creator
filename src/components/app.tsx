import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "./splash/splash";
import "../styles/index.scss";

const App: React.FC = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" Component={Splash} />
      </Routes>
    </div>
  );
};

export default App;
