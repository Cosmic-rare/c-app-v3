import React from "react"

import { Chip, Icon } from "@material-ui/core"

const Messages = (props) => {
  return (
    <div className="messages-grid">
      <div className="messages-container">

        <div className="message">
          <Chip avatar={<Icon>person</Icon>} label={"message.from" + " " + "message.msg"} />
        </div>

      </div>
    </div>
  )
}

export default Messages