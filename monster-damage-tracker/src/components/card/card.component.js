import React from 'react';

import './card.component.css';

export default ({ children, className }) => (
  <div className={`Card Elevated ${className}`}>
    {children}
  </div>
);
