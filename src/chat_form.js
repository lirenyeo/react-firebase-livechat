import React from 'react'

export default class ChatForm extends React.Component {
  render() {
    return(
      <form>
        <div className="input-group">
          <span className="input-group-btn">
            <input 
              className="form-control"
              type="text"
              placeholder="Name"
              style={{width: '80px', textAlign: 'center'}} />
          </span>
          <div className="input-group-addon">says: </div>
          <input 
            className="form-control"
            type="text" />
          <span className="input-group-btn">
            <input
              className="btn btn-default"
              type="submit"
              value="Send"
            />
          </span>
        </div>
      </form>
    )
  }
}