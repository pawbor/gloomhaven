import React from 'react';

import Card from 'components/card/card.component';
import Counter from 'components/counter/counter.component';
import { noop } from 'utils/function-utils';

import MonsterGroupStats from './monster-group-stats.component';

import './monster-group-tracker.component.css';

export default ({
  monsterGroup,
  groupLevel,
  onChangeGroupLevel = noop,
}) => {
  return (
    <Card className="MonsterGroupTracker">
      <header className="MonsterGroupTracker-Header">
        <span className="MonsterGroupTracker-MonsterName">
          {monsterGroup.name}
        </span>

        <Counter
          className="MonsterGroupTracker-GroupLevel"
          value={groupLevel}
          onChangeValue={handleChangeGroupLevel}
        />
      </header>
      <MonsterGroupStats
        className="MonsterGroupTracker-Stats"
        monsterGroup={monsterGroup}
        groupLevel={groupLevel}
      />
    </Card>
  );

  function handleChangeGroupLevel(groupLevel) {
    const isInvalid = groupLevel < 0 || groupLevel > 7;
    if (isInvalid) {
      return;
    }

    onChangeGroupLevel(groupLevel);
  }
};
