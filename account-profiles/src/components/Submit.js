import React, { Component } from 'react';
// import ProfileContext from 'contexts/ProfileContext';

class Submit extends Component {
  render() {
    return (
      <div className="field">
        <button
          type="submit"
          className="ui button"
          onClick={this.props.handleSubmit}
        >
          Submit
        </button>
      </div>  
    );
  }
}

export default Submit;
