import React, { Component } from 'react';
import { ProfileConsumer } from 'contexts/ProfileContext';

import Field from 'components/Field'
import Submit from 'components/Submit'

class AccountEdit extends Component {
  state = { name: '', status: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateProfile({ ...this.state });
    this.setState({ name: '', status: '' });
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <h5 className="header">Edit Account Profile</h5>
          <div className="description">
            <form className="form ui" onSubmit={this.handleSubmit}>
              <Field
                label="Name"
                name="name"
                value={this.state.name}
                handleChange={e => this.handleChange(e)}
              />
              <Field
                label="Status"
                name="status"
                value={this.state.status}
                handleChange={e => this.handleChange(e)}
              />
              <Submit handleSubmit={this.handleSubmit}/>      
            </form>
          </div>        
        </div>
      </div>
    );
  }
}

const ConnectedAccountEdit = () => (
  <ProfileConsumer>
    { value => <AccountEdit { ...value } />} 
  </ProfileConsumer>
)

export default ConnectedAccountEdit;
