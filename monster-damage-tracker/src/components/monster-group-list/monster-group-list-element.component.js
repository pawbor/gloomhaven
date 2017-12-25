import React from 'react';

import { classNameFromHashMap } from 'utils/class-name-utils';
import { noop } from 'utils/function-utils';

import './monster-group-list-element.component.css';

const MonsterGroupListElement = ({
  groupData,
  isSelected = false,
  onClick = noop,
}) => {
  const className = classNameFromHashMap({
    MonsterGroupListElement: true,
    'MonsterGroupListElement-clickable': true,
    'MonsterGroupListElement-selected': isSelected,
  });

  const handleClick = () => {
    onClick(groupData);
  };

  return (
    <li className={className} onClick={handleClick}>
      <span className="MonsterGroupListElement-Checkbox" />
      <span className="MonsterGroupListElement-Label">
        {groupData.name}
      </span>
    </li>
  );
};

export default MonsterGroupListElement;
