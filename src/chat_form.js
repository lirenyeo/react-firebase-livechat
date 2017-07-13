import React from 'react'

export default class ChatForm extends React.Component {
  render() {
    return(
      <div className="input-group">
        <span className="input-group-btn">
          <input placeholder="Name" type="text" className="form-control" style={{width: '80px', textAlign: 'center'}}/>
        </span>
        <div className="input-group-addon">says: </div>
        <input type="text" className="form-control" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">Send</button>
        </span>
      </div>
    )
  }
}