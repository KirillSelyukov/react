import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  const cssClass = ['BackDrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];
  return <div className={cssClass.join(' ')} />;
};

export default backdrop;
