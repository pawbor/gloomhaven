import React from 'react';

import './scrollable.component.css';

export default ({ children, className }) => (
  <div className={`Scrollable ${className}`}>
    <div className="Scrollable-Wrapper">{children}</div>
  </div>
);
