import React from "react"
import logo from "../logo.svg"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

const Topics = (props) => {
  const { topics, changeActiveTopic } = props
  return (
    <div className="topics-container">
      <List>
        {topics.map(topic => (
          <ListItem onClick={(e) => changeActiveTopic(e.target.innerText)} key={topic} button>{topic}</ListItem>
        ))}
      </List>
    </div>
  )
}

export default Topics