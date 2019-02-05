import React from 'react';

const Field = ({ label, name, value, handleChange }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input type="text" onChange={handleChange} name={name} value={value}/>
    </div>
  );
};

export default Field;
