import React from 'react';

const Field = props => {
  return (
    <div className="field">
      <label>{props.label}</label>
      <input type-="text" />
    </div>
  );
};

export default Field;