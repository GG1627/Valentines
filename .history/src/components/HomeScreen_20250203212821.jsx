import React, { useState } from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 200); // Subtract button width
    const y = Math.random() * (window.innerHeight - 60); // Subtract button height

    setNoButtonStyle({
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  return (
    <>
      <div className="HomeScreen_container">
        <div className="Content_container">
          <h1>Will You Be My Valentine? ❤️</h1>
          <div className="Button_container">
            <button className="Yes_button">Yes! 💖</button>
            <button
              className="No_button"
              style={noButtonStyle}
              onMouseEnter={moveButton}
            >
              No 😓
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
