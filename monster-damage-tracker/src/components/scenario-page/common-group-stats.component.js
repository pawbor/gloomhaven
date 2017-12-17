import React from 'react';
import classNames from 'classnames';

import MonsterBasicStat from './monster-basic-stats.component';
import MonsterTraits from './monster-traits.component';

import './common-group-stats.component.css';

export default ({ groupStats, className }) => {
  const normalStats = groupStats.normal;
  const eliteStats = groupStats.elite;

  return (
    <div
      className={classNames('CommonGroupStats', className)}
    >
      <div className="CommonGroupStats-Normal">
        <MonsterBasicStat stats={normalStats} />
        <MonsterTraits traits={normalStats.attributes} />
      </div>
      <div className="CommonGroupStats-Elite">
        <MonsterBasicStat stats={eliteStats} />
        <MonsterTraits traits={eliteStats.attributes} />
      </div>
    </div>
  );
};
