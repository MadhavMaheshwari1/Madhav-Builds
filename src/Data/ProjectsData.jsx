import React from 'react';
import ChatMate1 from "../assets/images/projects/ChatMate/ChatMateLaptop.webp";
import ChatMate2 from "../assets/images/projects/ChatMate/ChatMateTablet.webp";

import FaceSearchAI1 from "../assets/images/projects/FaceSearchAI/FaceSearchAiMackbook.webp";
import FaceSearchAI3 from "../assets/images/projects/FaceSearchAI/FaceSearchAIMobile1.webp";
import FaceSearchAI4 from "../assets/images/projects/FaceSearchAI/FaceSearchAIMobile2.webp";
import FaceSearchAI5 from "../assets/images/projects/FaceSearchAI/FaceSearchAIMobile3.webp";
import FaceSearchAI2 from "../assets/images/projects/FaceSearchAI/FaceSearchAiIpad.webp";

import PersistMobile1 from "../assets/images/projects/PersistVentures/PersistVenturesMobile1.webp";
import PersistMobile2 from "../assets/images/projects/PersistVentures/PersistVenturesMobile2.webp";
import PersistMobile3 from "../assets/images/projects/PersistVentures/PersistVenturesMobile3.webp";
import PersistTablet1 from "../assets/images/projects/PersistVentures/PersistVenturesTablet1.webp";
import PersistTablet2 from "../assets/images/projects/PersistVentures/PersistVenturesTablet2.webp";
import PersistMackbook from "../assets/images/projects/PersistVentures/PersistVenturesMackbook.webp";

import InsightIQ1 from "../assets/images/projects/HeyDaw/HeyDawMackbook1.webp";
import InsightIQ2 from "../assets/images/projects/HeyDaw/HeyDawMackbook2.webp";
import InsightIQ3 from "../assets/images/projects/HeyDaw/HeyDawMobile1.webp";
import InsightIQ4 from "../assets/images/projects/HeyDaw/HeyDawMobile2.webp";
import InsightIQ5 from "../assets/images/projects/HeyDaw/HeyDawMobile3.webp";
import InsightIQ6 from "../assets/images/projects/HeyDaw/HeyDawIPad.webp";

export const ProjectData = [
    {
        id: "VentureFlow",
        sequence: 1,
        title: "Venture Flow ",
        text: [
            "At Persist Ventures, I led the development of the Persist Ventures Dashboard, a SaaS platform designed to simplify financial analytics for startups. As CTO, my goal was to create a tool that empowers startups to make smarter, data-driven decisions.",

            "I oversaw the architecture of a scalable backend and integrated secure cloud services. Collaborating with the team, we designed an intuitive interface featuring real-time bar graphs, pie charts, and KPIs, helping startups unlock their potential and scale confidently."
        ],
        secondary: [
            "SaaS Platform",
            "Financial Analytics",
            "React",
            "Node.js",
            "MongoDB",
            "Data Visualization"
        ],
        phoneImgSrc: [PersistMobile3, PersistMobile1, PersistMobile2],
        desktopImgSrc: [],
        tabletImgSrc: [PersistTablet2, PersistTablet1],
        mobileFirst: true,
        githubLink: "https://github.com/MadhavMaheshwari1",
        liveLink: "https://github.com/MadhavMaheshwari1",
        next: "FaceIQ"
    },
    {
        id: "FaceIQ",
        sequence: 2,
        title: "Face IQ",
        text: [
            "During the facial recognition project, I led the team in designing a scalable, secure architecture while integrating AI and machine learning models. As CTO, I prioritized data privacy and collaborated closely with engineers to overcome technical challenges like training neural networks and optimizing real-time performance.",

            "I also ensured the project met ethical standards, addressing AI bias and compliance with data regulations. The goal was to build a user-friendly, robust system that set a new standard in technology and leadership."
        ],
        secondary: [
            "AI & Machine Learning",
            "Neural Networks",
            "Deep Learning",
            "Data Privacy & Security",
            "Scalable Architecture",
            "Cloud Infrastructure",
            "Ethical AI",
            "Bias Mitigation",
            "Real-time Data Processing",
            "Team Leadership",
        ],
        phoneImgSrc: [FaceSearchAI3, FaceSearchAI4, FaceSearchAI5],
        desktopImgSrc: [FaceSearchAI1],
        tabletImgSrc: [],
        mobileFirst: true,
        githubLink: "https://github.com/MadhavMaheshwari1/ChatMate",
        liveLink: "https://chatmate-b4t0.onrender.com",
        next: "ChatMate"
    },
    {
        id: "ChatMate",
        sequence: 3,
        title: "ChatMate",
        text: [
            "As a Full Stack Engineer for ChatMate, I focused on building a fast, secure real-time messaging platform. I developed a secure login system, implemented WebSocket communication, and optimized both back-end and front-end performance.",
            "I reduced message latency by 25% and integrated MongoDB for scalability, supporting thousands of messages per second. My work contributed to creating a robust, secure platform meeting technical and user needs."
        ],
        secondary: ["PWA", "React", "JavaScript", "Node JS"],
        phoneImgSrc: [ChatMate2],
        desktopImgSrc: [],
        tabletImgSrc: [ChatMate1],
        mobileFirst: true,
        githubLink: "https://github.com/MadhavMaheshwari1/ChatMate",
        liveLink: "https://chatmate-b4t0.onrender.com",
        next: "InsightIQ"
    },
    {
        id: "InsightIQ",
        sequence: 4,
        title: "Insight IQ",
        text: [
            "As a Software Engineer at Telaverge Communications, I contributed to the development of Insight IQ, an analytics platform delivering real-time insights. My role focused on building and optimizing backend services for fast data processing, secure APIs, and seamless integration with data sources, ensuring scalability and performance.",

            "I worked with cross-functional teams to improve platform performance and reliability, focusing on features that enabled data-driven decision-making with minimal delays. By optimizing queries, enhancing system stability, and ensuring smooth data flow, I helped make Insight IQ a reliable tool for users."
        ],
        secondary: [
            "Data Analytics",
            "Real-time Data Processing",
            "API Development",
            "Scalable Architecture",
            "Agile Development"
        ],
        phoneImgSrc: [InsightIQ3, InsightIQ4, InsightIQ5],
        desktopImgSrc: [InsightIQ1, InsightIQ2],
        tabletImgSrc: [InsightIQ6],
        mobileFirst: true,
        githubLink: "https://github.com/MadhavMaheshwari1/ChatMate",
        liveLink: "https://chatmate-b4t0.onrender.com",
        next: "VentureFlow"
    },
];
