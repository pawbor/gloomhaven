import React from 'react';

import { classNameFromHashMap } from 'utils/class-name-utils';

import './monster-list.component.css';

const MonsterListElement = ({ monster, onClick }) => {
  const className = classNameFromHashMap({
    'MonsterList-element': true,
    'MonsterList-element-clickable': !!onClick,
  });

  const handleClick = () => {
    onClick && onClick(monster);
  };

  return (
    <li className={className} onClick={handleClick}>
      {monster.name}
    </li>
  );
};

export default ({ monsters, onElementClick }) => (
  <ul className="MonsterList">
    {monsters.map(monster => (
      <MonsterListElement
        key={monster.name}
        monster={monster}
        onClick={onElementClick}
      />
    ))}
  </ul>
);
