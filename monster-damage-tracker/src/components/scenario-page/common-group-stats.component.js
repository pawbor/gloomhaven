import React from 'react';
import classNames from 'classnames';

import basicStatConfigs from './basic-stats';
import './common-group-stats.component.css';

export default ({ groupStats, className }) => {
  const stats = basicStatConfigs.map(config => (
    <li
      className="CommonGroupStats-BasicStat"
      key={config.propertyName}
    >
      <span className="CommonGroupStats-Label">
        {config.label}:
      </span>
      <span className="CommonGroupStats-Value CommonGroupStats-Normal">
        {groupStats.normal[config.propertyName]}
      </span>
      <span className="CommonGroupStats-Value CommonGroupStats-Elite">
        {groupStats.elite[config.propertyName]}
      </span>
    </li>
  ));
  return (
    <ul
      className={classNames('CommonGroupStats', className)}
    >
      {stats}
    </ul>
  );
};
