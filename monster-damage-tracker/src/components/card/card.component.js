import React from 'react';
import classNames from 'classnames';

import './card.component.css';

export default ({ children, className }) => (
  <div
    className={classNames('Card', 'Elevated', className)}
  >
    {children}
  </div>
);
