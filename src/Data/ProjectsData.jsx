import React from 'react';
import ChatMate1 from "../assets/images/projects/ChatMate/ChatMateLaptop.webp";
import ChatMate2 from "../assets/images/projects/ChatMate/ChatMateTablet.webp";
import FaceSearchAI1 from "../assets/images/projects/FaceSearchAI/FaceSearchAiMackbook.webp";
import FaceSearchAI3 from "../assets/images/projects/FaceSearchAI/FaceSearchAIMobile1.webp";
import FaceSearchAI4 from "../assets/images/projects/FaceSearchAI/FaceSearchAIMobile2.webp";
import FaceSearchAI5 from "../assets/images/projects/FaceSearchAI/FaceSearchAIMobile3.webp";
import FaceSearchAI2 from "../assets/images/projects/FaceSearchAI/FaceSearchAiIpad.webp";
import InsightIQ from "../assets/images/projects/HeyDaw/HeyDawMackbook.webp";

export const ProjectData = [
    {
        id: "ChatMate",
        sequence: 1,
        title: "ChatMate",
        text: ["ChatMate, a real-time messaging platform, was built to simplify communication and enhance user interactions. From the moment I joined the project as a Full Stack Engineer, my goal was to ensure seamless and fast messaging experiences for users. The platform allows users to send instant messages and share multimedia files with minimal delays, offering an engaging and smooth experience.As a Full Stack Engineer, I worked across the entire technology stack, from building a secure and intuitive login system to handling real-time communication using WebSocket technology. I was responsible for implementing the back-end services that power the messaging system and the front-end that ensures usability. One of the most rewarding aspects of the project was optimizing message delivery, reducing latency by 25%, which made the communication experience incredibly fast.I also helped integrate MongoDB to ensure that the platform could scale effectively and handle thousands of messages per second without affecting performance. Ensuring the app could manage large volumes of data while keeping the interface user-friendly was a key challenge that I worked closely on with the team.By collaborating with others across the project, I contributed to creating a robust system that meets both technical and user needs, resulting in a messaging platform that is efficient, secure, and designed with the user in mind."],
        secondary: ["PWA", "React", "JavaScript","Node JS"],
        phoneImgSrc: [],
        desktopImgSrc: [ChatMate1],
        tabletImgSrc: [ChatMate2],
        mobileFirst: true,
        githubLink: "https://github.com/MadhavMaheshwari1/ChatMate",
        liveLink: "https://chatmate-b4t0.onrender.com",
        next: "FaceSearchAI"
    },
    {
        id: "FaceSearchAI",
        sequence: 2,
        title: "Face Search AI",
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
        tabletImgSrc: [FaceSearchAI2],
        mobileFirst: true,
        githubLink: "https://github.com/MadhavMaheshwari1/ChatMate",
        liveLink: "https://chatmate-b4t0.onrender.com",
        next: "xpensity-v1"
    },
];

// ProjectList component to render projects
const ProjectList = () => {
    return (
        <div>
            {ProjectData.map(project => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.text.join(' ')}</p>
                    <p><strong>Technologies: </strong>{project.secondary.join(', ')}</p>
                    <div>
                        <h3>Images</h3>
                        {project.phoneImgSrc.length > 0 && (
                            <div>
                                {project.phoneImgSrc.map((imgSrc, index) => (
                                    <img key={index} src={imgSrc} alt={`${project.title} phone view ${index + 1}`} />
                                ))}
                            </div>
                        )}
                        {project.tabletImgSrc.length > 0 && (
                            <div>
                                {project.tabletImgSrc.map((imgSrc, index) => (
                                    <img key={index} src={imgSrc} alt={`${project.title} tablet view ${index + 1}`} />
                                ))}
                            </div>
                        )}
                        {project.desktopImgSrc.length > 0 && (
                            <div>
                                {project.desktopImgSrc.map((imgSrc, index) => (
                                    <img key={index} src={imgSrc} alt={`${project.title} desktop view ${index + 1}`} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Project</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default { ProjectList };
