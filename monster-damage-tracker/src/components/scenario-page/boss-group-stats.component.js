import React from 'react';
import classNames from 'classnames';

import basicStatConfigs from './basic-stats';
import './boss-group-stats.component.css';

export default ({ groupStats, className }) => {
  return (
    <div
      className={classNames('BossGroupStats', className)}
    >
      Boss stats
    </div>
  );
};
