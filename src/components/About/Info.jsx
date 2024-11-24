import React from "react";
import styled from "styled-components";

const InfoStyles = styled.div`
    margin-bottom: 0vh;
    margin-right: 5vw;
    display: flex;
    justify-content: space-between;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        margin-bottom: 10vh;
    }
    .info-main{
        width: 48%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        h2{
            font-size: calc(var(--VW)*2);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*2);
            }
        }
        p{
            margin-bottom: 1vw;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 1vw;
            }
            :last-child{
                margin-bottom: 0vw;
            }
        }
    }
    .info-credits{
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @media (hover: none) and (pointer: coarse){
            width: 68%;
            margin-top: 0vh;
        }
        @media (hover: none) and (pointer: coarse) and (max-width: 500px){
            width: 80%;
            margin-top: 10vh;
        }
        h1{
            font-size: calc(var(--VW)*4);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*4);
            }
        }
        h2{
            font-size: calc(var(--VW)*2);
            margin: 0.5vw 0;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*4);
            }
            :last-child{
                margin-bottom: 0;
            }
        }
        p{
            margin-bottom: 3vw;
            :nth-child(2){
                margin-bottom: 1vw;
                margin-top: 0.5vw;
            }
        }
    }
`

const Info = () => {
    return (
        <InfoStyles data-scroll-section className="info">
            <div className="info-main">
                <h2>Languages</h2>
                <p>Python, JavaScript, SQL</p>
                <h2>Frameworks/Libraries/Others</h2>
                <p>Node.js, React.js, Vue.js, Firebase, Git, PWA</p>
                <h2>AI & Software Development</h2>
                <p>AI, Machine Learning, NLP, TensorFlow</p>
                <h2>Education</h2>
                <p>Bachelor of Technology (B.Tech) <br />Computer Science <br />Dr. A.P.J. Abdul Kalam Technical University, India</p>
            </div>
            <div className="info-credits">
                <h1>Credits</h1>
                <p>This website was developed using React.js and Framer Motion. Special thanks to the following for their inspiration:</p>
                <h2><a href="https://pitchfork.com/reviews/albums/jay-z-444/" target="_blank" rel="noreferrer">Jay-Z's 4:44</a></h2>
                <h2><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noreferrer">Rick Astley</a></h2>
                <h2><a href="https://www.loftgarten.co/" target="_blank" rel="noreferrer">Loftgarten</a></h2>
                <h2><a href="http://www.iaragrinspun.com/" target="_blank" rel="noreferrer">Iara Grinspun</a></h2>
                <h2><a href="https://romainavalle.com/" target="_blank" rel="noreferrer">Romain Avalle</a></h2>
                <h2><a href="https://loerarchitecten.com/en/" target="_blank" rel="noreferrer">Loer Architecten</a></h2>
                <h2><a href="https://www.behance.net/martiniidesign" rel="noreferrer" target="_blank">Stefan Martinovic</a></h2>
                <h2><a href="https://lorenzocadamuro.com/" target="_blank" rel="noreferrer">Lorenzo Cadamuro</a></h2>
            </div>

        </InfoStyles>
    )
}

export { Info }