import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import "./WebSocketPage.css";
import { Button } from "../../components/Button/Button";
import { useLocation } from "react-router-dom";

export const WebSocketPage = () => {
  const currentLocation = useLocation();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const { sendMessage, lastMessage, getWebSocket } = useWebSocket(
    "wss://echo.websocket.org/",
    {
      shouldReconnect: () => false,
    }
  );

  useEffect(() => {
    if (lastMessage) {
      setResponse(lastMessage.data);
    }
  }, [lastMessage]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  useEffect(() => {
    return () => {
      const websocket = getWebSocket();
      if (websocket && websocket.readyState === WebSocket.OPEN) {
        console.log("Closing WebSocket");
        websocket.close();
      }
    };
  }, [currentLocation]);

  return (
    <div className="websocket-wrp">
      <h1 className="websocket-title">WebSocket Echo</h1>
      <form
        className="websocket-form"
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <label className="websocket-from-label" htmlFor="message">
          Сообщение:
        </label>
        <input
          className="websocket-form-input"
          type="text"
          id="message"
          value={message}
          onChange={handleInputChange}
        />
        <Button text={"Отправить"} />
      </form>
      <h2 className="websocket-server-response">Ответ от сервера:</h2>
      <p className="websocket-server-response-message">{response}</p>
    </div>
  );
};
