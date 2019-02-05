import React, { Component } from 'react';
import Field from 'components/Field'
import Submit from 'components/Submit'

const AccountEdit = () => {
  return (
    <div className="card">
      <div className="content">
        <h5 className="header">Edit Account Profile</h5>
        <div className="description">
          <div className="form ui">
            <Field label="Name"/>
            <Field label="Status" />
            <Submit />      
          </div>
        </div>        
      </div>
    </div>
  );
};

export default AccountEdit;