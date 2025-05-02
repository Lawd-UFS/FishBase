import React from 'react';

import './FormSteps.css'

function FormSteps() {
  return (
    <div className='FormSteps'>
        <div className='container-steps'>
          <div className="steps on"></div>
          <div className="steps off"></div>
          <div className="steps off"></div>
        </div>
        <span className='line'>----------------------</span>
    </div>
  );
}

export default FormSteps;