import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const SendMessage = (props) => {
  const { activeTopic } = props
  return (
    <div className="send-messages-grid">
      <div className="send-message-container">
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder={`Message  #${activeTopic}`}
          className="message-text-area"
        />
      </div>
    </div >
  )
}

export default SendMessage