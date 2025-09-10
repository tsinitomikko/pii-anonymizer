import React from 'react';

const InputBox = ({ value, onChange }) => {
  return (
    <textarea
      className="text-box"
      placeholder="Type text here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputBox;