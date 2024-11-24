import React from "react";
import styled from "styled-components";
import {Nav} from "../components/Nav";
import {useScroll} from "../hooks/useScroll";
import {motion} from "framer-motion";
import {Panels} from "../components/Panels";
import { Link } from "react-router-dom";
import {Info} from "../components/About/Info";
import {BigText} from "../components/About/BigText";
import {MainSection} from "../components/About/MainSection";

const AboutStyles = styled(motion.div)`
    padding: 0 4vw;
    padding-bottom: 6vw;
    .hello{
        h1{
            font-size: calc(var(--VW)*3);
            text-align: center;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .name{
        margin: 10vh 0 20vh 0;
        h1{
            font-size: calc(var(--VW)*16);
            line-height: 10vw;
            height: 10vw;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 0.1vw var(--black);
            text-transform: uppercase;
            :nth-child(3){
                text-align: right;
            }
        }
        h3{
            font-size: calc(var(--VW)*3);
            text-align: center;
            z-index: 5;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .split{
        margin: 5vh 0;
        h1{
            text-transform: uppercase;
            font-size: calc(var(--VW)*3);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*5);
            }
        }
    }
`

const About = ()=>{
    const {scrollRef} = useScroll();
    return (
        <>
            <Nav/>
            <Panels/>
            <AboutStyles 
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
            ref={scrollRef} data-scroll-container >
                <BigText/>
                <div data-scroll-section  className="hello">
                    <h1  data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal">Hi, my name is</h1>
                </div>
                <div data-scroll-section className="name">
                    <h1 data-scroll data-scroll-speed="0.5">Bhavya</h1>
                    <h3 data-scroll data-scroll-speed="6">CTO at Persist Ventures</h3>
                    <h1 data-scroll data-scroll-speed="0.5">Bansal</h1>
                </div>
                <MainSection/>
                <div data-scroll-section className="split">
                    <h1>AI Engineer</h1>
                    <h1>Fullstack Capable.</h1>
                </div>
                <Info/>
            </AboutStyles>
        </>
    )
}

export {About}