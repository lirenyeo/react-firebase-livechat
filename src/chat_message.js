import React from 'react'

export default class ChatMessage extends React.Component {
  render() {
    return(
      <div className="container" id="chat-message-container">
        
        <div className="row message-bubble">
          <p className="text-muted">Liren</p>
          <span>Let's use ReactJS and Firebase to make this chat works!</span>
        </div>

        <div className="row message-bubble">
          <p className="text-muted">Tom</p>
          <span>Cool!</span>
        </div>

        <div className="row message-bubble">
          <p className="text-muted">Sheng</p>
          <span>Yeaaboooooiiiiiiiiiiiiii</span>
        </div>

        <div className="row message-bubble">
          <p className="text-muted">Kevin</p>
          <span>As you can see, App component is the parent of ChatForm and ChatMessage components.</span>
        </div>

      </div>
    )
  }
}