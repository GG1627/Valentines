import React from "react";
import { motion } from "framer-motion";
import "./HomeScreen.css"; // We'll reuse some styles for now

const SheSaidYesScreen = () => {
  return (
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
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          Yay! You Said Yes! 🎉
        </motion.h1>

        <motion.div
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginTop: "2rem",
            color: "#b70101",
            fontFamily: '"Sour Gummy", serif',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          You've made me the happiest person ever! ❤️
        </motion.div>

        {/* Floating hearts animation */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "relative",
              fontSize: "2rem",
              userSelect: "none",
              pointerEvents: "none",
            }}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: Math.random() * window.innerWidth,
              y: -100,
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            {["❤️", "💖", "💝", "💕", "💗"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SheSaidYesScreen;
