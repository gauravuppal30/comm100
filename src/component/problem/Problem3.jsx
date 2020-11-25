import ChatBot from "react-simple-chatbot";
import Carousel from "../carousel/Carousel";
import { useState } from "react";
import Employee from "../employee/Employee";

const steps = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true,
  },
];

export default function Problem3() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="problem3">
      <Carousel />
      <Employee />
      <div className="sticky-chat" onClick={() => setShowChat(!showChat)}>
        How may I help you
      </div>
      {showChat && (
        <div className="bot-container">
          <span
            onClick={() => setShowChat(!showChat)}
            className="chat-bot-close-me"
          >
            X
          </span>
          <ChatBot steps={steps} />
        </div>
      )}
    </div>
  );
}
