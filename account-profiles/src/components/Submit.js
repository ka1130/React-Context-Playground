import React, { Component } from 'react';
import { ColorConsumer } from 'contexts/ColorContext';
import { EditionConsumer } from 'contexts/EditionContext';

class Submit extends Component {
  renderColorConsumer(data) {
    console.log(data);
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
    )
  }
  render() {
    return (
      <EditionConsumer>
        { value => this.renderColorConsumer(value) }
      </EditionConsumer>

    );
  }
}

export default Submit;
