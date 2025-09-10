import React from 'react';

const StatusIndicator = ({ isValid }) => {
  let statusText = '';
  let statusClass = '';

  if (isValid === true) {
    statusText = 'Valid';
    statusClass = 'status-valid';
  } else if (isValid === false) {
    statusText = 'Invalid';
    statusClass = 'status-invalid';
  }

  return (
    <span className={`status-text ${statusClass}`}>
      {statusText}
    </span>
  );
};

export default StatusIndicator;