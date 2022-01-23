import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const SendMessage = (props) => {
  return (
    <div className="send-messages-grid">
      <div className="send-message-container">
        <TextField
          autoComplete="off"
          color="primary"
          id="filled-name"
          className="message-input"
          label="Type a message..."
        />
        <Button color="primary" variant="contained" className="message-button">Send</Button>
      </div>
    </div >
  )
}

export default SendMessage