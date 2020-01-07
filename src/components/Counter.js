import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState({
      number: this.state.number + 1
    });
  };

  decrement(){
    if(this.state.number != 0){
      this.setState({
        number: this.state.number - 1
      });
    }
    else{
      alert('Number cannot be less than zero')
    }
  };

  render() {
    return (
      <div style={{backgroundColor:'#e6e6ff', margin:'20px', marginTop: '0px', padding:'20px', color:'black', borderRadius:'20px', display:'inline-block', textAlign:'left'}}>
        <div style={{display:'flex', textItems:'center', justifyContent:'center'}}>
          <h2>{this.state.number}</h2>
        </div>

        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>

    )
  }
};

Counter.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Counter;
