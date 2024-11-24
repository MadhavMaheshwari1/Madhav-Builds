import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyles = styled.div`
    .home,.works, .about{
        position: fixed;
        z-index: 20;
    }

    .works, .about,.home{
        transition: 0.3s all ease;
        transform: rotate(90deg);
        transform-origin: 0% 0%;
        right: -5vw;
        font-size: calc(var(--VW) *1.2);
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            font-size: calc(var(--VW) *3);
            right: -12vw;
        }
        :hover{
            -webkit-text-stroke: 0.1vw var(--black);
        }
    }


    .about{
        bottom: 6.5vw;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            bottom: 13.5vw;
        }
    }


`

const Nav = () => {

    return (
        <NavStyles>
            <Link className="works nav-button" to="/works">Works</Link>
            {/* <Link className="nav-button home" to="/">Home</Link> */}
            <Link className="about nav-button" to="/about">About</Link>
        </NavStyles>
    )
}

export { Nav };