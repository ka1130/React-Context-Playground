import React, { Component } from 'react';
import { ColorConsumer } from 'contexts/ColorContext';

class Submit extends Component {
  render() {
    return (
      <ColorConsumer>
        { value => (
          <div className="field">
            <button
              type="submit"
              className={`ui button ${value.submit}`}
              onClick={this.props.handleSubmit}
            >
              Submit
            </button>
          </div>  
        ) }
      </ColorConsumer>

    );
  }
}

export default Submit;
