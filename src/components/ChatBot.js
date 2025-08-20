// src/components/ChatBot.js
import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    setChat([...chat, { sender: "user", text: input }]);
    setLoading(true);

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    setChat((prev) => [...prev, { sender: "bot", text: data.reply }]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {chat.map((msg, idx) => (
          <div key={idx} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="bot-msg">Yazıyor...</div>}
      </div>
      <div className="input-box">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Sorunuzu yazın..." />
        <button onClick={sendMessage}>Gönder</button>
      </div>
    </div>
  );
};

export default ChatBot;
