import React from 'react';
import classNames from 'classnames';

import './card.component.css';

const Card = ({ children, className }) => (
  <div
    className={classNames('Card', 'Elevated', className)}
  >
    {children}
  </div>
);

export default Card;
