import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Animations } from "../../Animations";

const BigTextStyles = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-bottom: 10vh;
    .container {
        overflow: hidden;
        width: 100%;
        text-align: center;
        h1 {
            text-transform: uppercase;
            font-size: calc(var(--VW) * 10);
            line-height: 10vw;
            height: 10vw;
            overflow: hidden;
        }
    }
`;

const BigText = () => {
    const { transition, textReveal } = Animations();
    return (
        <BigTextStyles data-scroll-section className="big-text mLeft10">
            <div className="container">
                <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={{ ...transition, delay: 3 }}
                >
                    Leading
                </motion.h1>
            </div>
            <div className="container mLeft15">
                <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={{ ...transition, delay: 3.2 }}
                >
                    growth
                </motion.h1>
            </div>
            <div className="container">
                <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={{ ...transition, delay: 3.4 }}
                >
                    driving
                </motion.h1>
            </div>
            <div className="container mLeft15">
                <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={{ ...transition, delay: 3.6 }}
                >
                    success.
                </motion.h1>
            </div>
        </BigTextStyles>
    );
};

export { BigText };
