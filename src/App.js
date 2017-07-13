import React from 'react'
import ChatForm from './chat_form'
import ChatMessage from './chat_message'
import Firebase from './firebase'
import './App.css'

const chatRef = Firebase.database().ref('chat-production')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentWillMount() {
    chatRef.limitToLast(40).on('child_added', (snapshot) => {
      this.setState({
        messages: this.state.messages.concat({
          id: snapshot.key,
          user: snapshot.val().dbUser,
          text: snapshot.val().dbMessage
        })
      })
    })
  }

  sendMessage(messageObj) {
    chatRef.push({
      dbMessage: messageObj.text,
      dbUser: messageObj.user
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
