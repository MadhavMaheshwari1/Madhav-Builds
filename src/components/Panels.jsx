import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Animations } from "../Animations";

const PanelStyles = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(var(--VW) * 100);
  height: calc(var(--VH) * 100);
  z-index: 50;
  pointer-events: none;
  overflow: hidden; /* Ensures no content from behind is visible */

  .left,
  .right {
    height: 100%;
    width: 50.5%;
    position: absolute;
    top: 0;
    z-index: 50;
    background-color: var(--black);
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .message {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: var(--burlywood);
    font-size: calc(var(--VW) * 2);
    z-index: 51;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      font-size: calc(var(--VW) * 4);
    }
  }
`;

const generateMessage = () => {
  const messages = [
    "Bruh, almost there…",
    "Hold up, it's coming!",
    "Patience, young grasshopper…",
    "Just a sec, fam…",
    "Gimme a minute…",
    "Hang On...",
    "Chillin' while we load…",
    "It's loading, no cap!",
    "Hang tight, squad…",
    "We're working, stay tuned…",
    "Don't go anywhere…",
    "Loading, don't ghost us!",
    "Yo, hold on for a sec…",
    "We got you, just loading…",
    "BRB, setting things up…",
    "Loading, but making it quick…",
    "Stay with us, almost there…",
    "On the way, no rush…"
  ];

  const randomNum = Math.floor(Math.random() * messages.length);
  return messages[randomNum];
};

const Panels = () => {
  const { transition } = Animations();

  return (
    <PanelStyles>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [window.innerHeight, window.innerHeight, 0, 0],
          top: [0, 0, window.innerHeight, window.innerHeight],
          transition: { ...transition, duration: 3.5, times: [0, 0.6, 0.99, 1] }
        }}
        exit={{
          height: [0, 0, window.innerHeight, window.innerHeight],
          top: [0, 0, 0, 0],
          transition: { ...transition, duration: 2, times: [0, 0, 1, 0.9, 1] }
        }}
        className="left"
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [window.innerHeight, window.innerHeight, 0, 0],
          top: [0, 0, 0, 0],
          transition: { ...transition, duration: 3.5, times: [0, 0.6, 0.99, 1] }
        }}
        exit={{
          height: [0, 0, window.innerHeight, window.innerHeight],
          top: [window.innerHeight, window.innerHeight, 0, 0],
          transition: { ...transition, duration: 2, times: [0, 0, 1, 0.9, 1] }
        }}
        className="right"
      ></motion.div>
      <motion.h2
        initial={{
          opacity: 0,
          display: "block",
          top: "60%",
          left: "50%",
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          top: ["70%", "50%", "50%", "30%", "40%"],
          left: "50%",
          x: "-50%",
          y: "-50%",
          opacity: [0, 1, 1, 0, 0],
          transition: { ...transition, duration: 2.4, times: [0, 0.5, 0.5, 0.99, 1] }
        }}
        exit={{
          display: "none",
          opacity: 0,
          transition: { duration: 0.01 }
        }}
        className="message"
      >
        {window.innerWidth < 500 ? "Best Viewed on Desktop" : generateMessage()}
      </motion.h2>
    </PanelStyles>
  );
};

export { Panels };
