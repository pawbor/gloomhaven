import React from 'react';
import classNames from 'classnames';

import MonsterBasicStat from './monster-basic-stats.component';
import MonsterConditionsImmunity from './monster-conditions-immunity.component';
import MonsterSpecials from './monster-specials.component';
import MonsterNotes from './monster-notes.component';
import './boss-group-stats.component.css';

const BossGroupStats = ({ groupStats, className }) => {
  return (
    <div
      className={classNames('BossGroupStats', className)}
    >
      <MonsterBasicStat stats={groupStats} />
      <MonsterConditionsImmunity
        conditions={groupStats.immunities}
      />
      <MonsterSpecials specials={groupStats} />
      <MonsterNotes notes={groupStats.notes} />
    </div>
  );
};

export default BossGroupStats;
