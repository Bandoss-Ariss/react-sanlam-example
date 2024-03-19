import React from 'react';

const ScanButton = ({handleClick}) => {
  return (
    <button className="button-arounder" id="scan-btn" onClick={handleClick}>
      Scanner des documents
    </button>
  );
};

export default ScanButton;