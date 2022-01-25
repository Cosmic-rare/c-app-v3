import { useState } from "react"

import Topics from "./Topics"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import Header from "./Header"

const Dashboard = (props) => {
  const topics = ["雑談1", "雑談2"]
  const messages = [
    { from: "Tani", msg: "Hello", id: 0, date: "2021/01/01(火) 12:00" },
    { from: "Tani", msg: "👍", id: 1, date: "2021/01/01(火) 12:00" },
    { from: "Tani", msg: "👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍", id: 2, date: "2021/01/01(火) 12:00" }
  ]
  const [activeTopic, changeActiveTopic] = useState(topics[0])

  const user = "eric#1234"

  return (
    <div>
      <Header activeTopic={activeTopic} topics={topics} />
      <div className="grid-container">
        <div className="topics-grid">
          <Topics topics={topics} changeActiveTopic={changeActiveTopic} />
        </div>

        <div className="messages-grid">
          <Messages activeTopic={activeTopic} messages={messages} />
        </div>

        <div className="send-messages-grid">
          <SendMessage user={user} activeTopic={activeTopic} />
        </div>
      </div >
    </div>
  )
}

export default Dashboard