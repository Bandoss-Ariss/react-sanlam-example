import React, { useState, useEffect, useRef } from 'react';
import ScanButton from './ScanButton';
import SDKInterface from './SDKInterface';
import TriggerButton from './TriggerButton';

const SanlamOcr = () => {
  const [sdkInterface, setSdkInterface] = useState(null);
  const triggerScanButtonRef = useRef(null); 

  const handleClick = async () => {
   
        setSdkInterface(new SDKInterface());
    };
    useEffect(() => {
        const triggerScan = () => {
            if (triggerScanButtonRef.current) {
              triggerScanButtonRef.current.click();
            }
          };
          if (sdkInterface) {
            triggerScan();
          }
          window.addEventListener('message', (event) => {
            if (event.origin === 'http://localhost:5000') {
              let ocrInfo = event.data;
              console.log("Infos fetchées par l'OCR");
              console.log(ocrInfo);
            }
          });
      
      }, [sdkInterface]);



  return (
    <div className="buttons-container">
      <ScanButton handleClick={handleClick} />
      {sdkInterface &&  <TriggerButton triggerScanButtonRef={triggerScanButtonRef}/>}
      {sdkInterface && sdkInterface.Generate() }
    </div>
  );
};

export default SanlamOcr;
