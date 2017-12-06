import React from 'react';

import MonsterGroupListElement from './monster-group-list-element.component';
import './monster-group-list.component.css';

export default ({
  monsters,
  selectedMonsters,
  onClickMonster,
}) => (
  <ul className="MonsterGroupList">
    {monsters.map(monster => (
      <MonsterGroupListElement
        key={monster.name}
        monster={monster}
        isSelected={selectedMonsters.indexOf(monster) > -1}
        onClick={onClickMonster}
      />
    ))}
  </ul>
);
