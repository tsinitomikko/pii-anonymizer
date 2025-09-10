import React from 'react';

const OutputBox = ({ value }) => {
  return (
    <textarea
      className="text-box output-box"
      placeholder="Processed text will appear here."
      readOnly
      value={value}
    />
  );
};

export default OutputBox;