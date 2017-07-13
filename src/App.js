import React from 'react'
import ChatForm from './chat_form'
import ChatMessage from './chat_message'
import Firebase from './firebase'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">Welcome to this friendly chatroom</div>
            <div className="panel-body">
                <ChatMessage />
              <div className="panel-footer">
                <ChatForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
