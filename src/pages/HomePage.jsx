import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hoverEffect from "hover-effect";
import MyImage1 from "../assets/Image.avif";
import MyImage2 from "../assets/Me.avif";
import DisplacementImg from "../assets/DisplacementImage.avif";
import { Animations } from "../Animations";
import { motion } from "framer-motion";
//components
import { Panels } from "../components/Panels";
import { Names } from "../components/HomePage/Names";
//icons
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const HomepageStyles = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 2vw;
    @media (hover: none) and (pointer: coarse){
        padding: 10vh 5vw;
    }
    .left{
        height: 100%;
        width: 24%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            display: none;
        }
        &-top{
            .pic{
                height: 50vh;
                overflow: hidden;
            }
            .descriptions{
                margin-top: 3vh;
                text-align: justify;
            }
        }
        &-bottom{
            overflow: hidden;
            a{
                margin-right: 3vw;
                display: inline-block;
                svg{
                    pointer-events: none;
                    width: 2.5vw;
                    height: 2.5vw;
                    mix-blend-mode: normal;
                    color: var(--black);
                    background-color: var(--burlywood);
                    &:hover{
                        color: var(--burlywood);
                        background-color:var(--black);
                    }
                }
            }
        }
    }
    .right{
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
        }
        &-descriptions{
            display: none;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                display: block;
                text-align: justify;
                width: 52%;
                margin: 5vh 0;
            }
            @media (max-width: 500px){
                width: 85%;
            }
        }
        &-bottom{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            max-height: 40vh;
            position: relative;
            top: 1%;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-top: 0;
                margin-bottom: 5vh;
            }
            .link-container{
                overflow: hidden;
                text-align: right;
                :nth-child(1){
                    padding-right: 5vw;
                    @media (hover: none) and (pointer: coarse), (max-width: 500px){
                        padding-right: 0;
                    }
                }
                :nth-child(3){
                    padding-right: 10vw;
                    @media (hover: none) and (pointer: coarse), (max-width: 500px){
                        padding-right: 0;
                    }
                }
                .link-wrapper{
                    a{
                        display: inline-block;
                        font-size:calc(var(--VW)*7);
                        line-height: calc(var(--VW)*6);
                        height: calc(var(--VW)*6);
                        @media (hover: none) and (pointer: coarse), (max-width: 500px){
                            font-size:calc(var(--VW)*12);
                            line-height: calc(var(--VW)*11);
                            height: calc(var(--VW)*11);
                        }
                        .number{
                            pointer-events: none;
                            font-size:calc(var(--VW)*2);
                            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                            font-size:calc(var(--VW)*3);
                            }
                        }
                    }
                }
            }
        }
    }
`

const Home = () => {
  const profile = useRef(null);
  const { transition, opacityReveal, angleTextReveal } = Animations();
  useEffect(() => {
    new hoverEffect({
      parent: profile.current,
      intensity: 1.4,
      image1: MyImage1,
      image2: MyImage2,
      displacementImage: DisplacementImg
    })
  });

  return (
    <>
      <Panels />
      <HomepageStyles
        initial={{ backgroundColor: "#0f0e0e", pointerEvents: "none" }}
        animate={{ backgroundColor: "transparent", pointerEvents: "unset" }}
        exit={{ opacity: [1, 1, 0], transition: { duration: 2, times: [0, 0.99, 1] } }}
      >
        <div className="left">
          <div className="left-top">
            <div className="pic" ref={profile}></div>
            <div className="descriptions">
              <motion.p
                variants={opacityReveal} initial="initial"
                animate="animate"
                transition={{ ...transition, duration: 1, delay: 4.5 }}
              >
                Hello 👋 I'm Madhav Maheshwari an Interactive developer striving to craft memorable experiences on the digital canvas. Front-end addicted, Fullstack capable. Currently located in Dehradun.</motion.p>
            </div>
          </div>
          <div className="left-bottom">
            <motion.a
              variants={opacityReveal} initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 1, delay: 5.7 }}
              href="www.linkedin.com/in/madhav-maheshwari-231b9022b" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </motion.a>
            <motion.a
              variants={opacityReveal} initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 1, delay: 5.9 }}
              href="https://github.com/MadhavMaheshwari1" target="_blank" rel="noreferrer">
              <FaGithub />
            </motion.a>
          </div>
        </div>
        <div className="right">
          <Names />
          <div className="right-descriptions">
            <motion.p
              variants={opacityReveal} initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 1, delay: 4.5 }}
            >Interactive developer striving to craft memorable experiences on the digital canvas. Front-end addicted, Fullstack capable. Currently located in Dehradun.</motion.p>
          </div>
          <div className="right-bottom">
            <motion.div className="link-container">
              <motion.div className="link-wrapper"
                variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 1, delay: 5 }}
              >
                <Link to="works"><span className="number">01.</span>Works</Link>
              </motion.div>
            </motion.div>
            <motion.div className="link-container">
              <motion.div className="link-wrapper"
                variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 1, delay: 5.2 }}
              >
                <Link to="about"><span className="number">02.</span>About</Link>
              </motion.div>
            </motion.div>
            <motion.div className="link-container">
              <motion.div className="link-wrapper"
                variants={angleTextReveal} initial="initial" animate="animate" transition={{ ...transition, duration: 1, delay: 5.4 }}
              >
                <a href="mailto:maheshwarimadhav166@gmail.com"><span className="number">03.</span>Contact</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </HomepageStyles>
    </>
  )
}

export { Home }