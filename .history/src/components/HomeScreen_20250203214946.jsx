import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [showSparkles, setShowSparkles] = useState(true);

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
      <motion.div
        className="HomeScreen_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="Content_container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1>Will You Be My Valentine? ❤️</h1>
          <div className="Button_container">
            <motion.button
              className="Yes_button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Yes! 💖
            </motion.button>
            <motion.button
              className="No_button"
              style={noButtonStyle}
              onMouseEnter={moveButton}
              whileHover={{ scale: 0.9 }}
            >
              No 😓
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {showSparkles && (
            <div style={{ position: "fixed", inset: 0, pointerEvents: "none" }}>
              {[...Array(35)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 1,
                    scale: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    opacity: 1,
                    scale: [0, 1.5, 0],
                    rotate: [0, 360],
                  }}
                  exit={{ opacity: 1 }}
                  transition={{
                    duration: 3, // Increased duration to slow down the sparkle
                    delay: i * 0.1, // Increased delay between sparkles
                    repeat: Infinity,
                  }}
                  style={{
                    position: "absolute",
                    width: "10px",
                    height: "10px",
                    background: "white",
                    borderRadius: "50%",
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default HomeScreen;
