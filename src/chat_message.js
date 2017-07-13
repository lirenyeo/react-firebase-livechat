import React from 'react'

export default class ChatMessage extends React.Component {
  scrollToBottom() {
    let element = document.getElementById('chat-message-container');
    element.scrollTop = element.scrollHeight;
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollToBottom()
  }

  render() {
    return(
      <div className="container" id="chat-message-container">
        {
          this.props.messages.map( (message, index) => {
            return(
              <div key={index} className="row message-bubble">
                <p className="text-muted">{message.user}</p>
                <span>{message.text}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}