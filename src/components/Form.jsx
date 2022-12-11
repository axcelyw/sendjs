import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        submit: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      event.preventDefault()
      this.setState({
        name: event.target.value
      })
    }
  
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.name
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <h3>{this.state.submit}</h3>
        <input value={this.state.name} onChange={this.handleChange} placeholder="..." type="text"/>
        <button id="buttonNext" type="submit">Далее</button>
      </form>
      )
    }
  
  };

 export default Form