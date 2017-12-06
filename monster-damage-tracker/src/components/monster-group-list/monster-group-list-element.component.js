import React from 'react';

import { classNameFromHashMap } from 'utils/class-name-utils';
import { noop } from 'utils/function-utils';

import './monster-group-list-element.component.css';

export default ({
  monster,
  isSelected = false,
  onClick = noop,
}) => {
  const className = classNameFromHashMap({
    MonsterGroupListElement: true,
    'MonsterGroupListElement-clickable': true,
    'MonsterGroupListElement-selected': isSelected,
  });

  const handleClick = () => {
    onClick(monster);
  };

  return (
    <li className={className} onClick={handleClick}>
      <span className="MonsterGroupListElement-Checkbox" />
      <span className="MonsterGroupListElement-Label">
        {monster.name}
      </span>
    </li>
  );
};
