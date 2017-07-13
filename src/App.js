import React from 'react'
import ChatForm from './chat_form'
import ChatMessage from './chat_message'
import Firebase from './firebase'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(messageObj) {
    this.setState({
      messages: this.state.messages.concat(messageObj)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">Welcome to this friendly chatroom</div>
            <div className="panel-body">
                <ChatMessage messages={ this.state.messages }/>
              <div className="panel-footer">
                <ChatForm sendMessage={ this.sendMessage } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
