import ChatMate from "../assets/images/projects/ChatMate/ChatMateLaptop.webp";
import FaceSearchAI from "../assets/images/projects/FaceSearchAI/FaceSearchAiMackbook.webp";
import InsightIQ from "../assets/images/projects/HeyDaw/HeyDawMackbook.webp";
import PersistVentures from "../assets/images/projects/PersistVentures/PersistVenturesWorksPage.webp";

const WorksList = [
    {
        id: "VentureFlow",
        title: "Venture Flow",
        src: PersistVentures,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "60%",
        offsetX: 30,
        offsetY: -10,
    },
    {
        id: "FaceIQ",
        title: "Face IQ",
        src: FaceSearchAI,
        leftFlex: 3,
        rightFlex: 1,
        thumbnailOffset: "20%",
        offsetX: 0,
        offsetY: -10,
    },
    {
        id: "ChatMate",
        title: "Chat Mate",
        src: ChatMate,
        leftFlex: 1,
        rightFlex: 3,
        thumbnailOffset: "70%",
        offsetX: -10,
        offsetY: 5,
    },
    {
        id: "InsightIQ",
        title: "Insight IQ",
        src: InsightIQ,
        leftFlex: 1,
        rightFlex: 1,
        thumbnailOffset: "10%",
        offsetX: -10,
        offsetY: 2,
    },
];

export default WorksList;
