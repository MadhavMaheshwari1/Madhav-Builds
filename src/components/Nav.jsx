import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.avif"

const NavStyles = styled.div`
    .logo,.works, .about{
        position: fixed;
        z-index: 20;
    }

    .logo{
        top: 2vw;
        left: 0vw;
        width: 3.2vw;
        height: 3.2vw;
        mix-blend-mode: normal;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 7vw;
            height: 7vw;
        }
    }

    .works, .about{
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

    .works{
        top: 2.2vw;
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
            <Link className="logo nav-button" to="/">
                <img src={logo} alt="Logo"/>
            </Link>
            <Link className="works nav-button" to="/works">Works</Link>
            <Link className="about nav-button" to="/about">About</Link>
        </NavStyles>
    )
}

export { Nav };