import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Animations } from "../../Animations";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const MainSectionStyles = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-end;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    justify-content: flex-start;
  }
  .content {
    width: 40%;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 95%;
    }
    .title-wrapper {
      overflow: hidden;
      margin-bottom: 3vw;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin-bottom: 3vw;
      }
      .title {
        font-size: calc(var(--VW) * 2);
        position: relative;
        @media (hover: none) and (pointer: coarse), (max-width: 500px) {
          font-size: calc(var(--VW) * 6);
        }
      }
      .underline {
        width: 30%;
        height: 0.3vw;
        background-color: var(--black);
      }
    }
    .links {
      text-align: right;
      margin-bottom: 2vw;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin-bottom: 4vw;
      }
      a {
        height: 100%;
        display: inline-block;
        margin: 0 0.5vw;
        @media (hover: none) and (pointer: coarse), (max-width: 500px) {
          margin: 0 2vw;
        }
        svg {
          width: 3.5vw;
          height: 3.5vw;
          pointer-events: none;
          mix-blend-mode: normal;
          color: var(--black);
          background-color: var(--burlywood);
          @media (hover: none) and (pointer: coarse) and (min-width: 500px) {
            width: 8vw;
            height: 8vw;
            mix-blend-mode: unset;
          }
          @media (max-width: 500px) {
            width: 12vw;
            height: 12vw;
            mix-blend-mode: unset;
          }
        }
      }
    }
    .text {
      margin-bottom: 3vw;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin-bottom: 5vw;
      }
    }
  }
`;

const MainSection = ({ title, githubLink, liveLink, texts }) => {
  const { transition, textReveal, opacityReveal } = Animations();
  return (
    <MainSectionStyles data-scroll-section>
      <div className="content">
        <div className="title-wrapper">
          <motion.h1
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 2, delay: 4 }}
            className="title"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "0%" }}
            transition={{ ...transition, duration: 2, delay: 4.4 }}
            className="underline"
          ></motion.div>
        </div>
        <motion.div
          variants={opacityReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, duration: 2, delay: 4.6 }}
          className="links"
        >
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <FaLink />
          </a>
        </motion.div>
        {texts.map((text, index) => (
          <motion.p
            variants={opacityReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 2, delay: 4.8 }}
            className="text"
            key={index}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </MainSectionStyles>
  );
};

export { MainSection };
