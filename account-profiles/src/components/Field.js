import React from 'react';

const Field = props => {
  return (
    <div className="field">
      <label>{props.label}</label>
      <input type="text" onChange={props.handleChange} name={props.name} value={props.value}/>
    </div>
  );
};

export default Field;