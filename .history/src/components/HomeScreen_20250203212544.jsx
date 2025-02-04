import React from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <div className="HomeScreen_container">
        <div className="Content_container">
          <h1>Will You Be My Valentine? ❤️</h1>
          <div className="Button_container">
            <button className="Yes_button">Yes! 💖</button>
            <button className="No_button">No 😓</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
