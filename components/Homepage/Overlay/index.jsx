import React from "react";
import styles from './style.module.css'

const index = () => {
  return (
    <>
      <div className="intro-overlay">
        <div className='top'>
          <div className='overlay-top'></div>
          {/* <div className='overlay-top'></div>
          <div className='overlay-top'></div> */}
        </div>
        <div className='bottom'>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
        </div>
      </div>
    </>
  );
};

export default index;
