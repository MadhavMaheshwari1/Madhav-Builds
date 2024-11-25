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
            "At Persist Ventures, we recognized that startups often face challenges in making sense of their financial data. To address this, I spearheaded the creation of the Persist Ventures Dashboard, a SaaS platform designed to bring clarity to financial analytics. My journey as the CTO began with a vision to deliver a tool that not only simplifies complex data but also empowers startups to make smarter, data-driven decisions.",
            "From architecting the scalable backend to integrating secure cloud services, every decision was aimed at building a robust foundation for the platform. I worked closely with the team to craft an intuitive user interface, combining elegant design with functionality. The dashboard showcases bar graphs, pie charts, and key performance indicators in real-time, offering users actionable insights at a glance. This project has been a fulfilling endeavor, helping startups unlock their potential and scale with confidence."
        ],
        secondary: [
            "SaaS Platform",
            "Financial Analytics",
            "React",
            "Node.js",
            "MongoDB",
            "Cloud Infrastructure",
            "Data Visualization"
        ],
        phoneImgSrc: [PersistMobile3,PersistMobile1,PersistMobile2],
        desktopImgSrc: [],
        tabletImgSrc: [PersistTablet2,PersistTablet1],
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
            "I remember the early days of the facial recognition project vividly. It was a vision we had discussed for months, but uncertainty loomed over its execution. One pivotal morning, I realized the key to moving forward was not just in the technology but in building a team capable of delivering a solution with precision and responsibility.As the CTO, my role was multifaceted. I spearheaded the architectural design, ensuring scalability and security were at the forefront. I collaborated closely with the engineers to integrate cutting-edge AI and machine learning models while ensuring data privacy was non-negotiable. There were challenges—ranging from training the neural networks to optimizing performance for real-time recognition—but every setback became an opportunity to innovate.Beyond the technical aspects, I focused on aligning the project with ethical standards, addressing concerns like bias in AI models and compliance with data regulations. I worked with stakeholders to create a user-centric design, ensuring the system was intuitive yet robust.This project wasn't just about building a product; it was about setting a benchmark in technology and leadership. It's the culmination of my team's effort and vision, and I'm proud to have played a part in bringing it to life."
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
            "Stakeholder Management",
            "Compliance & Regulations",
            "AI Model Integration",
            "System Design",
            "Full-Stack Development"
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
            "ChatMate is a real-time messaging platform built to simplify communication. As a Full Stack Engineer, I focused on delivering seamless, fast messaging experiences. I worked across the entire tech stack, from developing a secure login system to implementing real-time communication using WebSocket technology. I was responsible for both the back-end services and front-end usability, optimizing the platform's performance.",
            "One of my key contributions was reducing message latency by 25%, improving communication speed. I also integrated MongoDB to ensure scalability, handling thousands of messages per second. Collaborating closely with the team, I helped create a robust and secure platform designed to meet both technical requirements and user needs."
        ],
        secondary: ["PWA", "React", "JavaScript", "Node JS"],
        phoneImgSrc: [ChatMate2],
        desktopImgSrc: [ChatMate1],
        tabletImgSrc: [],
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
        desktopImgSrc: [InsightIQ1,InsightIQ2],
        tabletImgSrc: [InsightIQ6],
        mobileFirst: true,
        githubLink: "https://github.com/MadhavMaheshwari1/ChatMate",
        liveLink: "https://chatmate-b4t0.onrender.com",
        next: "VentureFlow"
    },
];
