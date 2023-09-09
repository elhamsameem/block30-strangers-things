import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { sendMessage } from "../api";
import "./MessagePage.css";

export default function MessagePage({ isLoggedIn }) {
  const [message, setMessage] = useState("");
  const [sendSuccess, setSendSuccess] = useState(false);
  const { postId } = useParams();

  const handleSendClick = async () => {
    if (message.trim().length > 0) {
      //send a success message
      const result = await sendMessage(postId, message);
      if (result.success) {
        setSendSuccess(true);
      }

      setMessage("");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Message seller for Post ID: {postId}</h1>
          <textarea
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSendClick}>Send</button>
          {sendSuccess && <p>Message sent successfully!</p>}
        </>
      ) : (
        <p>You must be logged in to send a message</p>
      )}
    </div>
  );
}
