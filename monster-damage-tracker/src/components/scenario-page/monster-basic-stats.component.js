import React from 'react';
import classNames from 'classnames';

import './monster-basic-stats.component.css';

const basicStatConfigs = [
  {
    label: 'H',
    propertyName: 'health',
  },
  {
    label: 'M',
    propertyName: 'move',
  },
  {
    label: 'A',
    propertyName: 'attack',
  },
  {
    label: 'R',
    propertyName: 'range',
  },
];

export default ({ stats, className }) => {
  const elements = basicStatConfigs.map(renderElement);

  return (
    <div
      className={classNames('MonsterBasicStats', className)}
    >
      {elements}
    </div>
  );

  function renderElement(statConfig) {
    return (
      <span
        className="MonsterBasicStats-Element"
        key={statConfig.propertyName}
      >
        <span className="MonsterBasicStats-Label">
          {statConfig.label}:
        </span>
        <span className="MonsterBasicStats-Value">
          {stats[statConfig.propertyName]}
        </span>
      </span>
    );
  }
};
