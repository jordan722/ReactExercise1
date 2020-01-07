import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ContactCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div style={{backgroundColor:'#e6e6ff', margin:'20px', marginTop: '0px', padding:'20px', color:'black', borderRadius:'20px', display:'inline-block', textAlign:'left'}}>
        <b>Name:</b> {this.props.name} <br/>
        <b>Phone Number:</b> {this.props.number} <br/>
        <b>Email:</b> {this.props.email} <br/>
        <b>Work Number:</b> {this.props.work ? this.props.work : "Not Provided"}
      </div>

    )
  }
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  work: PropTypes.string

}

export default ContactCard
