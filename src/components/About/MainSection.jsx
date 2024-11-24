import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import Bhavya from "../../assets/Me.avif";
import Bhavya2 from "../../assets/Image.avif";
import HeatMap from "../../assets/images/HomePage/heightMap.webp";

const MainSectionStyles = styled.div`
    margin: 20vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 10vh;
    }
    .main-pic{
        width: 25vw;
        height: 30vw;
        margin-right: 5vw;
        text-align: center;
        overflow: hidden;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
            width: 50vw;
            height: 55vw;
        }
    }
    .main-text{
        width: 45%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        p{
            margin: 2vw 0;
            mix-blend-mode: normal;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin: 5vw 0;
            }
            a{
                font-family:   Grotesk;
                text-transform: none;
                mix-blend-mode: normal;
            }
        }
    }
`

const MainSection = () => {
    const profileRef = useRef(null);
    useEffect(() => {
        new hoverEffect({
            parent: profileRef.current,
            intensity: 1.4,
            image1: Bhavya2,
            image2: Bhavya,
            displacementImage: HeatMap
        })
    });
    return (
        <MainSectionStyles data-scroll-section className="main">
            <div data-scroll data-scroll-speed="6" className="main-pic rounded-[40px]" ref={profileRef}></div>
            <div className="main-text">
                <p>Welcome to my portfolio! I'm Bhavya Bansal, the Chief Technology Officer at <a href="https://www.persistventures.com" target="_blank" rel="noreferrer">Persist Ventures</a>. With a rich background in full-stack development, AI, and software engineering, I focus on solving complex problems with innovative technological solutions. My experience spans across diverse industries, working with teams to create impactful AI-driven products and digital platforms.</p>
                <p>Over the years, I've had the privilege to lead technical projects that bridge the gap between cutting-edge development and client success. I am passionate about driving business growth through technology and finding the perfect balance between creativity and practicality in digital solutions.</p>
                <p>I also worked at <a href="https://www.facesearch.ai" target="_blank" rel="noreferrer" className="underline">FacesearchAI</a> as a CTO, where I contributed to Innovative AI and software development strategies. In addition, I previously worked at <a href="https://www.telaverge.com" target="_blank" rel="noreferrer" className="underline">Telaverge Communications</a> and <a href="https://www.heydaw.com" target="_blank" rel="noreferrer" className="underline">HeyDaw Technologies</a>, building solutions in the AI domain.</p>
                <p>Outside of work, I have a deep interest in boxing, especially the strategies used by fighters in the lower weight divisions. This hobby keeps me inspired to think strategically and apply those lessons to my work in technology. I'm always looking for new opportunities to connect and collaborate with like-minded professionals!</p>
            </div>
        </MainSectionStyles>
    )
}

export { MainSection }