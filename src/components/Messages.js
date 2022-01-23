import React from "react"
import logo from "../logo.svg"

import { Chip, Icon } from "@material-ui/core"

const Messages = (props) => {
  const { messages } = props

  return (
    <div className="messages-container">

      {messages.map((message) => {
        return (
          <div className="message" key={message.id}>
            <Chip avatar={<Icon><img src={logo} /></Icon>} label={message.from + " " + message.msg} />
          </div>
        )
      })}

    </div>
  )
}

export default Messages