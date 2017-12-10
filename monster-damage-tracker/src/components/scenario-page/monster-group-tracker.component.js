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
    <li className="MonsterGroupTracker">
      <Card>
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
    </li>
  );

  function handleChangeGroupLevel(groupLevel) {
    const isInvalid = groupLevel < 0 || groupLevel > 7;
    console.log(groupLevel, 'isInvalid:', isInvalid);
    if (isInvalid) {
      return;
    }

    onChangeGroupLevel(groupLevel);
  }
};
