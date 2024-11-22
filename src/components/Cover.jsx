import React from "react";
import styled from "styled-components";

const CoverStyles = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--burlywood);
    z-index: 50;
    display: none;
    @media (hover: none) and (pointer: coarse) and (orientation: landscape){
        display: flex;
    }
    .content{
        height: 20%;
        text-align: center;
        svg{
            height: 100%;
        }
    }
`

const Cover = () => {
    return (
        <CoverStyles>
            <div className="content">
                <svg version="1.1" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" >
                    <title /><desc /><defs /><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#0f0e0e" id="Icons-Device" transform="translate(-210.000000, -124.000000)"><g id="screen-rotation" transform="translate(210.000000, 124.000000)"><path d="M16.5,2.5 C19.8,4 22.1,7.2 22.5,11 L24,11 C23.4,4.8 18.3,0 12,0 L11.3,0 L15.1,3.8 L16.5,2.5 L16.5,2.5 Z M10.2,1.7 C9.6,1.1 8.7,1.1 8.1,1.7 L1.7,8.1 C1.1,8.7 1.1,9.6 1.7,10.2 L13.7,22.2 C14.3,22.8 15.2,22.8 15.8,22.2 L22.2,15.8 C22.8,15.2 22.8,14.3 22.2,13.7 L10.2,1.7 L10.2,1.7 Z M14.8,21.2 L2.8,9.2 L9.2,2.8 L21.2,14.8 L14.8,21.2 L14.8,21.2 Z M7.5,21.5 C4.2,20 1.9,16.8 1.5,13 L0.1,13 C0.6,19.2 5.7,24 12,24 L12.7,24 L8.9,20.2 L7.5,21.5 L7.5,21.5 Z" id="Shape" /></g></g></g></svg>
            </div>
        </CoverStyles>
    )
}

export { Cover }