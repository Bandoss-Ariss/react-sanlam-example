import React, { useRef, useEffect } from 'react';

const TriggerButton = ({ triggerScanButtonRef }) => {
  const buttonElement = useRef(null);

  useEffect(() => {
    if (buttonElement.current) {
      triggerScanButtonRef.current = buttonElement.current; 
    }
  }, [buttonElement, triggerScanButtonRef])

  return (
    <div className="container">
      <button type="button" data-toggle="modal" data-target="#myModal" ref={buttonElement} className="btn btn-info btn-lg invisible" id="trigger-scan">
          Ouvrir la popup
        </button>
      {/* Rest of your component's JSX */}
    </div>
  );
};

export default TriggerButton;