import React from 'react';
import classNames from 'classnames';

import { noop } from 'utils/function-utils';
import { toggleArrayElement } from 'utils/array-utils';

import MonsterGroupListElement from './monster-group-list-element.component';
import './monster-group-list.component.css';

const MonsterGroupList = ({
  className,
  monsterGroups = [],
  selectedMonsterGroups = [],
  onChangeSelectedMonsterGroups = noop,
}) => {
  return (
    <ul
      className={classNames('MonsterGroupList', className)}
    >
      {monsterGroups.map(renderListElement)}
    </ul>
  );

  function renderListElement(groupData) {
    const isSelected =
      selectedMonsterGroups.indexOf(groupData.name) > -1;

    return (
      <MonsterGroupListElement
        key={groupData.name}
        groupData={groupData}
        isSelected={isSelected}
        onClick={handleClickMonsterGroup}
      />
    );
  }

  function handleClickMonsterGroup(groupData) {
    const newSelectedMonsterGroups = toggleArrayElement(
      selectedMonsterGroups,
      groupData.name
    );
    onChangeSelectedMonsterGroups(newSelectedMonsterGroups);
  }
};

export default MonsterGroupList;
