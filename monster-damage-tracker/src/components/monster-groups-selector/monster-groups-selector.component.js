import React from 'react';

import Card from 'components/card/card.component';
import MonsterGroupList from 'components/monster-group-list/monster-group-list.component';
import Scrollable from 'components/scrollable/scrollable.component';
import { noop } from 'utils/function-utils';
import { allMonsterGroups } from 'utils/monsters-data-utils';
import { toggleArrayElement } from 'utils/array-utils';

import './monster-groups-selector.component.css';

class MonsterGroupsSelector extends React.Component {
  static defaultProps = {
    onChangeCurrentScenario: noop,
    onCloseMonsterGroupsSelector: noop,
  };

  constructor(props) {
    super(props);

    const { currentScenario } = props;
    const selectedMonsterGroups = Object.keys(
      currentScenario.monsterGroups
    );

    this.state = {
      selectedMonsterGroups,
    };
  }

  render() {
    const { selectedMonsterGroups } = this.state;

    const {
      handleClickMonster,
      handleClickApply,
      handleClickCancel,
    } = this;

    return (
      <div className="MonsterGroupsSelector">
        <Card className="MonsterGroupsSelector-Card">
          <Scrollable className="MonsterGroupsSelector-List">
            <MonsterGroupList
              monsterGroups={allMonsterGroups}
              selectedMonsterGroups={selectedMonsterGroups}
              onClickMonsterGroup={handleClickMonster}
            />
          </Scrollable>

          <div className="MonsterGroupsSelector-Actions">
            <button
              className="MonsterGroupsSelector-CancelButton Button-danger"
              onClick={handleClickCancel}
            >
              Cancel
            </button>

            <button
              className="MonsterGroupsSelector-ApplyButton Button-primary"
              onClick={handleClickApply}
            >
              Apply
            </button>
          </div>
        </Card>
      </div>
    );
  }

  handleClickMonster = (monsterGroup) => {
    this.setState((prevState) => {
      return {
        selectedMonsterGroups: toggleArrayElement(
          prevState.selectedMonsterGroups,
          monsterGroup.name
        ),
      };
    });
  };

  handleClickApply = () => {
    const {
      currentScenario,
      onChangeCurrentScenario,
      onCloseMonsterGroupsSelector,
    } = this.props;

    const { selectedMonsterGroups } = this.state;

    const monsterGroups = selectedMonsterGroups.reduce(
      (levels, monsterGroupName) => ({
        ...levels,
        [monsterGroupName]: currentScenario.monsterGroups[
          monsterGroupName
        ] || {
          level: 0,
        },
      }),
      {}
    );

    const scenario = {
      ...currentScenario,
      monsterGroups,
    };

    onChangeCurrentScenario(scenario);
    onCloseMonsterGroupsSelector();
  };

  handleClickCancel = () => {
    const { onCloseMonsterGroupsSelector } = this.props;

    onCloseMonsterGroupsSelector();
  };
}

export default MonsterGroupsSelector;
