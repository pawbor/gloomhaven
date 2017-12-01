import React from 'react';

import MonsterList from 'monster-list/monster-list.component';
import { arraysDiff } from 'utils/array-utils';

import './monsters-selector.component.css';

export default ({
  monsters,
  selectedMonsters,
  onSelectionChange,
}) => {
  const notSelectedMonsters = arraysDiff(
    monsters,
    selectedMonsters
  );

  const handleMonsterSelect = monster => {
    const newSelectedMonsters = [
      ...selectedMonsters,
      monster,
    ];

    onSelectionChange &&
      onSelectionChange(newSelectedMonsters);
  };

  const handleMonsterDeselect = monster => {
    const newSelectedMonsters = arraysDiff(
      selectedMonsters,
      [monster]
    );
    onSelectionChange &&
      onSelectionChange(newSelectedMonsters);
  };

  return (
    <div className="MonstersSelector">
      <div className="MonstersSelector-notSelected">
        <MonsterList
          monsters={notSelectedMonsters}
          onElementClick={handleMonsterSelect}
        />
      </div>
      <div className="MonstersSelector-selected">
        <MonsterList
          monsters={selectedMonsters}
          onElementClick={handleMonsterDeselect}
        />
      </div>
    </div>
  );
};
