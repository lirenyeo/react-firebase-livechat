import React from 'react'

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Annonymous',
      text: ''
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleTextInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state)
    this.setState({text: ''})
  }

  render() {
    return(
      <form onSubmit={ this.handleFormSubmit } disabled={ true }>
        <div className="input-group">
          <span className="input-group-btn">
            <input 
              className="form-control"
              name="user"
              value={this.state.user}
              onChange={ this.handleTextInput }
              type="text"
              placeholder="Name"
              style={{width: '110px', textAlign: 'center'}}
            />
          </span>
          <div className="input-group-addon">says: </div>
          <input 
            className="form-control"
            name="text"
            value={this.state.text}
            onChange={ this.handleTextInput }
            type="text"
          />
          <span className="input-group-btn">
            <input
              className="btn btn-default"
              type="submit"
              value="Send"
              disabled={ this.state.user === "" || this.state.text === "" }
            />
          </span>
        </div>
        </form>
    )
  }
}