import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Chat.css";

function Chat() {
  const location = useLocation();
  const artist = location.state;

  const [messages, setMessages] = useState([
    { sender: "artist", text: "Hey! Thanks for connecting 🎵" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="chat-page">

      {/* LEFT SIDEBAR */}
      <div className="chat-sidebar">
        <h3>Chats</h3>

        <div className="chat-user active">
          <img src={artist.image} alt="" />
          <span>{artist.name}</span>
        </div>
      </div>

      {/* CHAT BOX */}
      <div className="chat-box">

        <div className="chat-header">
          <img src={artist.image} alt="" />
          <h3>{artist.name}</h3>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`msg ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>

      </div>

    </div>
  );
}

export default Chat;