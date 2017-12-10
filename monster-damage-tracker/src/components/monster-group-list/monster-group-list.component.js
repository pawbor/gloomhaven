import React from 'react';

import MonsterGroupListElement from './monster-group-list-element.component';
import './monster-group-list.component.css';

export default ({
  monsterGroups,
  selectedMonsterGroups,
  onClickMonsterGroup,
}) => (
  <ul className="MonsterGroupList">
    {monsterGroups.map(monster => (
      <MonsterGroupListElement
        key={monster.name}
        monster={monster}
        isSelected={
          selectedMonsterGroups.indexOf(monster) > -1
        }
        onClick={onClickMonsterGroup}
      />
    ))}
  </ul>
);
