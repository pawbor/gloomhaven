import React from 'react';

import Card from 'components/card/card.component';
import Counter from 'components/counter/counter.component';
import { noop } from 'utils/function-utils';
import { MonsterType } from 'utils/monsters-data-utils';

import BossGroupStats from './boss-group-stats.component';
import CommonGroupStats from './common-group-stats.component';

import './monster-group-tracker.component.css';

const monsterGroupStatsComponents = {
  [MonsterType.Common]: CommonGroupStats,
  [MonsterType.Boss]: BossGroupStats,
};

const MonsterGroupTracker = ({
  groupData,
  groupState,
  onChangeGroupState = noop,
}) => {
  const { level: groupLevel } = groupState;

  const groupStats = groupData.stats[groupLevel];
  const MonsterGroupStats =
    monsterGroupStatsComponents[groupData.type];

  return (
    <Card className="MonsterGroupTracker">
      <header className="MonsterGroupTracker-Header">
        <span className="MonsterGroupTracker-MonsterName">
          {groupData.name}
        </span>

        <Counter
          className="MonsterGroupTracker-GroupLevel"
          value={groupLevel}
          onChangeValue={handleChangeGroupLevel}
        />
      </header>
      <MonsterGroupStats
        className="MonsterGroupTracker-Stats"
        groupStats={groupStats}
      />
    </Card>
  );

  function handleChangeGroupLevel(level) {
    const isInvalid = level < 0 || level > 7;
    if (isInvalid) {
      return;
    }

    onChangeGroupState({
      ...groupState,
      level,
    });
  }
};

export default MonsterGroupTracker;
