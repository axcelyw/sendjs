import React from 'react';

  class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.counter
      }

      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.random = this.random.bind(this)
      this.reset = this.reset.bind(this)
    }


    
    increment() {
      if (this.state.count <= 30) {
        this.setState({
          count: this.state.count + 1
        })
      }
    }

    decrement() {
      if (this.state.count >= -30) {
        this.setState({
          count: this.state.count - 1
        })
      }
    }

    random() {
      this.setState({
        count: getRandom(0, 30)
      })
    }

    reset() {
      this.setState({
        count: 0
      })
    }

    render() {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.random}>Random</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      )
    }
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

export default Counter