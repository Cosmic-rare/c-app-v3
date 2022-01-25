import React from "react";
import logo from "../logo.svg"
import "./Messages.css"

import { Chip, Icon } from "@material-ui/core"

const Messages = (props) => {
  const { messages } = props;

  return (
    <div className="messages-container">
      {messages.map((message) => {
        return (
          <div className="message" key={message.id}>
            <img src={logo} className="user-icon" />
            <div className="message-content">
              <p>
                <span className="user-name">{message.from}</span>
                <span className="post-time">{"- " + message.date}</span>
              </p>
              <div className="message-msg">
                {message.msg}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
