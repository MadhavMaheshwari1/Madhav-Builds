import React from "react";
import styled from "styled-components";
import { Nav } from "../components/Nav";
import { useScroll } from "../hooks/useScroll";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { MainSection } from "../components/projectPage/MainSection";
import { SecondarySection } from "../components/projectPage/SecondarySection";
import { PhoneSection } from "../components/projectPage/PhoneSection";
import { DesktopSection } from "../components/projectPage/DesktopSection";
import { TabletSection } from "../components/projectPage/TabletSection";
import { ProjectFooter } from "../components/projectPage/ProjectFooter";
import { useData } from "../hooks/UseData";
import { motion } from "framer-motion";
import { Panels } from "../components/Panels";
import { Animations } from "../Animations";

const ProjectStyles = styled(motion.div)`
  padding: 6vw 5vw;
  padding-right: 6vw;
  .number {
    display: flex;
    justify-content: flex-start;
    position: relative;
    left: -26%;
    overflow: hidden;
    margin: 5vw 0;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      left: -38%;
      width: 120%;
      margin: 5vw 0;
    }
    &-wrapper {
      overflow: hidden;
      h1 {
        font-size: calc(var(--VW) * 40);
        line-height: 33vw;
        height: 33vw;
        position: relative;
        bottom: -10%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px) {
          font-size: calc(var(--VW) * 60);
          line-height: 50vw;
          height: 50vw;
        }
      }
    }
  }
`;

const Project = () => {
  const { scrollRef } = useScroll();
  const { projectID } = useParams();
  const { getData } = useData();
  const { transition, angleTextReveal } = Animations();
  const navigate = useNavigate(); // Hook to navigate to different pages

  const {
    title,
    sequence,
    text,
    secondary,
    phoneImgSrc,
    desktopImgSrc,
    tabletImgSrc,
    mobileFirst,
    githubLink,
    liveLink,
    next,
  } = getData(projectID);

  // Function to modify path and navigate
  const getUpdatedNextPath = () => {
    // Get the current path
    const currentPath = window.location.pathname;

    // Split path to pop the last part
    const pathParts = currentPath.split('/');

    // Remove the last part (projectID) and append the new 'next' value
    pathParts.pop();
    pathParts.push(next); // Add the 'next' value from your data

    // Create the new path and navigate
    const newPath = pathParts.join('/');
    return newPath;
  };

  return (
    <>
      <Nav />
      <Panels />
      <ProjectStyles
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)", pointerEvents: "none" }}
        animate={{ backgroundColor: "rgba(0, 0, 0, 0)", pointerEvents: "unset" }}
        exit={{
          opacity: [1, 1, 0],
          transition: { duration: 2, times: [0, 0.99, 1] },
        }}
        ref={scrollRef}
        data-scroll-container
      >
        <div data-scroll-section className="number">
          <div className="number-wrapper">
            <motion.h1
              variants={angleTextReveal}
              initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 2, delay: 3 }}
            >
              0
            </motion.h1>
          </div>
          <div className="number-wrapper">
            <motion.h1
              variants={angleTextReveal}
              initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 2, delay: 3.4 }}
            >
              {sequence}
            </motion.h1>
          </div>
        </div>
        <MainSection
          title={title}
          texts={text}
          githubLink={githubLink}
          liveLink={liveLink}
        />
        <SecondarySection secondary={secondary} />
        {
          mobileFirst && desktopImgSrc.length > 0 && phoneImgSrc.length > 0 &&
          <>
            <PhoneSection phoneImgSrc={phoneImgSrc} />
            <DesktopSection desktopImgSrc={desktopImgSrc} />
          </>
        }
        {
          mobileFirst && desktopImgSrc.length === 0 && phoneImgSrc.length > 0 &&
          <PhoneSection phoneImgSrc={phoneImgSrc} />
        }
        {
          !mobileFirst && phoneImgSrc.length > 0 &&
          <>
            <DesktopSection desktopImgSrc={desktopImgSrc} />
            <PhoneSection phoneImgSrc={phoneImgSrc} />
          </>
        }
        {
          tabletImgSrc.length > 0 &&
          <TabletSection tabletImgSrc={tabletImgSrc} />
        }
        <ProjectFooter next={getUpdatedNextPath()} />
      </ProjectStyles>
    </>
  );
};

export { Project };
