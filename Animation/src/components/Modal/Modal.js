import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTimeng = {
  enter: 300,
  exit: 1000
};
const modal = props => {
  return (
    <Transition
      in={props.show}
      timeout={animationTimeng}
      mountOnEnter
      unmountOnExit
    >
      {state => {
        const cssClass = [
          'Modal',
          state === 'entering'
            ? 'ModalOpen'
            : state === 'exiting'
              ? 'ModalClosed'
              : null
        ];
        return (
          <div className={cssClass.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
