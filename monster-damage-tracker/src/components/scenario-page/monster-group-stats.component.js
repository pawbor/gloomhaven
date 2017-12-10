import React from 'react';

import { MonsterType } from 'utils/monsters-data-utils';

import BossGroupStats from './boss-group-stats.component';
import CommonGroupStats from './common-group-stats.component';

const monsterGroupStatsComponents = {
  [MonsterType.Common]: CommonGroupStats,
  [MonsterType.Boss]: BossGroupStats,
};

export default ({
  monsterGroup,
  groupLevel,
  className,
}) => {
  const groupStats = monsterGroup.stats[groupLevel];
  const MonsterGroupStats =
    monsterGroupStatsComponents[monsterGroup.type];
  return (
    <MonsterGroupStats
      groupStats={groupStats}
      className={className}
    />
  );
};
