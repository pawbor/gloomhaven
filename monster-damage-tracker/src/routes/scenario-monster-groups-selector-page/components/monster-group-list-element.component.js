import React from 'react';
import classNames from 'classnames';

import Card from 'components/card/card.component';
import { noop } from 'utils/function-utils';

import './monster-group-list-element.component.css';

const MonsterGroupListElement = ({
  groupData,
  isSelected = false,
  onClick = noop,
}) => {
  const className = classNames(
    'MonsterGroupListElement',
    'MonsterGroupListElement-clickable',
    {
      'MonsterGroupListElement-selected': isSelected,
    }
  );

  const handleClick = () => {
    onClick(groupData);
  };

  return (
    <li className={className} onClick={handleClick}>
      <Card className="MonsterGroupListElement-Card">
        <span className="MonsterGroupListElement-Checkbox" />
        <span className="MonsterGroupListElement-Label">
          {groupData.name}
        </span>
      </Card>
    </li>
  );
};

export default MonsterGroupListElement;
