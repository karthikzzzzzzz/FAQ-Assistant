import React, { useState } from "react";
import "./chatbot.css";
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Ragbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleQuerySubmit = async () => {
    if (!query.trim()) return;
  
    setMessages((prev) => [...prev, { type: "user", content: query }]);
    setQuery("");
  
    try {
      setIsLoading(true);
      const response = await fetch(`http://backend:8000/chat-completions?query=${query}`, {
        method: "POST",
      });
  
      let result = await response.text(); 
      if (result.startsWith('"') && result.endsWith('"')) {
        result = result.slice(1, -1); 
      }
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: result || "No valid response from server." },
      ]);
    } catch (error) {
      console.error("Error processing your query.", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: "Error processing your query." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="chatbot-container">
      <div className="chatbot-header">FAQ-Assistant</div>
    
      <div className="chatbot-chat-window">
        <ToastContainer />
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${msg.type === "user" ? "user-message" : "bot-message"}`}
          >
            <div>{msg.content}</div>
          </div>
        ))}
        {isLoading && <div className="loading-message">Bot is typing...</div>}
      </div>

      <div className="chatbot-composer">    
        <input
          type="text"
          className="chatbot-input"
          placeholder="Enter the prompt here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleQuerySubmit(); 
            }
          }}
        />
        
        <button className="chatbot-send-button" onClick={handleQuerySubmit}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Ragbot;
