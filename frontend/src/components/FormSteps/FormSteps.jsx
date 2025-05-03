import React from 'react';

import './FormSteps.css'

function FormSteps({step}) {
  return (
    <div className='FormSteps'>
        <div className='container-steps'>
          <div className={`steps ${step == 1 ? 'on' : 'off'}`}></div>
          <div className={`steps  ${step == 2 ? 'on' : 'off'}`}></div>
          <div className={`steps  ${step == 3 ? 'on' : 'off'}`}></div>
        </div>
        <span className='line'>----------------------</span>
    </div>
  );
}

export default FormSteps;