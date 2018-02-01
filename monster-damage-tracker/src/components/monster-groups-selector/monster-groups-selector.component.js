import React from 'react';

import MonsterGroupList from 'components/monster-group-list/monster-group-list.component';
import Scrollable from 'components/scrollable/scrollable.component';
import { noop } from 'utils/function-utils';

import './monster-groups-selector.component.css';

const MonsterGroupsSelector = ({
  monsterGroups = [],
  selectedMonsterGroups = [],
  onChangeSelectedMonsterGroups = noop,
  onAccept = noop,
  onCancel = noop,
}) => {
  return (
    <div className="MonsterGroupsSelector">
      <div className="MonsterGroupsSelector-Actions">
        <button
          className="MonsterGroupsSelector-CancelButton Button-danger"
          onClick={handleClickCancel}
        >
          Cancel
        </button>

        <button
          className="MonsterGroupsSelector-AcceptButton Button-primary"
          onClick={handleClickAccept}
        >
          Accept
        </button>
      </div>
      <Scrollable className="MonsterGroupsSelector-List">
        <MonsterGroupList
          monsterGroups={monsterGroups}
          selectedMonsterGroups={selectedMonsterGroups}
          onChangeSelectedMonsterGroups={
            onChangeSelectedMonsterGroups
          }
        />
      </Scrollable>
    </div>
  );

  function handleClickAccept() {
    onAccept();
  }

  function handleClickCancel() {
    onCancel();
  }
};

export default MonsterGroupsSelector;
