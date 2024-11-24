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
    .info{
    height:100vh;
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

        </InfoStyles>
    )
}

export { Info }