import React from 'react';
import classNames from 'classnames';

import './scrollable.component.css';

const Scrollable = ({ children, className }) => (
  <div className={classNames('Scrollable', className)}>
    <div className="Scrollable-Wrapper">{children}</div>
  </div>
);

export default Scrollable;
