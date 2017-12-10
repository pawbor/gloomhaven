import React from 'react';

import Card from 'components/card/card.component';
import MonsterGroupStats from './monster-group-stats.component';
import './monster-group-tracker.component.css';

export default ({ monsterGroup, groupLevel }) => {
  return (
    <li className="MonsterGroupTracker">
      <Card>
        <header>
          <span className="MonsterGroupTracker-Name">
            {monsterGroup.name}
          </span>
        </header>
        <MonsterGroupStats
          className="MonsterGroupTracker-Stats"
          monsterGroup={monsterGroup}
          groupLevel={groupLevel}
        />
      </Card>
    </li>
  );
};
