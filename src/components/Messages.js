import React from 'react'

import { Chip, Icon } from '@material-ui/core';

export default function Messages() {
  return (
    <div className="messages-grid">
      <div className="messages-container">

        <div className="message">
          <Chip avatar={<Icon>person</Icon>} label={"message.from" + ' ' + "message.msg"} />
        </div>

      </div>
    </div>
  )
}