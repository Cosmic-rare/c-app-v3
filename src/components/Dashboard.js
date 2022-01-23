import { useState } from "react"

import Topics from "./Topics"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import Header from "./Header"

const  Dashboard = (props) => {
  const topics = ["雑談1", "雑談2"]
  const messages = [{from: "Tani", msg: "Hello", id: 0}, {from: "Tani", msg: "👍", id: 1}]
  const [activeTopic, changeActiveTopic] = useState(topics[0])

  const user = "eric#1234"

  return (
    <div>
      <Header activeTopic={activeTopic} />
      <div className="grid-container">
        <Topics topics={topics} changeActiveTopic={changeActiveTopic} />
        <Messages activeTopic={activeTopic} messages={messages} />
        <SendMessage user={user} activeTopic={activeTopic} />
      </div >
    </div >
  )
}

export default Dashboard