import React from 'react';

import basicStatConfigs from './basic-stats';
import './boss-group-stats.component.css';

export default ({ groupStats, className }) => {
  return (
    <div className={`BossGroupStats ${className}`}>
      Boss stats
    </div>
  );
};
