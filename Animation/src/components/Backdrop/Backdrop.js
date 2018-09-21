import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  const cssClass = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];
  return <div className={cssClass.join(' ')} />;
};

export default backdrop;
