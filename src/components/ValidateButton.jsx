import React from 'react';

const ValidateButton = ({ onClick }) => {
  return (
    <button className="validate-button" onClick={onClick}>
      Validate
    </button>
  );
};

export default ValidateButton;