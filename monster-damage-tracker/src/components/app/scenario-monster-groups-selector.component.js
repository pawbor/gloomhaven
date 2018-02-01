import React from 'react';

import MonsterGroupsSelector from 'components/monster-groups-selector/monster-groups-selector.component';
import { noop } from 'utils/function-utils';
import { allMonsterGroups } from 'utils/monsters-data-utils';

class ScenarioMonsterGroupsSelector extends React.Component {
  static defaultProps = {
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
      handleChangeSelectedMonsterGroups,
      handleAccept,
      handleCancel,
    } = this;

    return (
      <MonsterGroupsSelector
        monsterGroups={allMonsterGroups}
        selectedMonsterGroups={selectedMonsterGroups}
        onChangeSelectedMonsterGroups={
          handleChangeSelectedMonsterGroups
        }
        onAccept={handleAccept}
        onCancel={handleCancel}
      />
    );
  }

  handleChangeSelectedMonsterGroups = (
    selectedMonsterGroups
  ) => {
    this.setState((prevState) => {
      return {
        selectedMonsterGroups,
      };
    });
  };

  handleAccept = () => {
    const {
      currentScenario,
      onCloseMonsterGroupsSelector,
    } = this.props;

    const { selectedMonsterGroups } = this.state;

    const updatedScenario = updateScenarioMonsterGroups(
      currentScenario,
      selectedMonsterGroups
    );

    onCloseMonsterGroupsSelector(updatedScenario);
  };

  handleCancel = () => {
    const {
      currentScenario,
      onCloseMonsterGroupsSelector,
    } = this.props;

    onCloseMonsterGroupsSelector(currentScenario);
  };
}

export default ScenarioMonsterGroupsSelector;

function updateScenarioMonsterGroups(
  scenario,
  selectedMonsterGroups
) {
  const monsterGroups = selectedMonsterGroups.reduce(
    appendMonsterGroup,
    {}
  );

  return {
    ...scenario,
    monsterGroups,
  };

  function appendMonsterGroup(
    monsterGroups,
    monsterGroupName
  ) {
    return {
      ...monsterGroups,
      [monsterGroupName]:
        scenario.monsterGroups[monsterGroupName] ||
        createDefaultMonsterGroup(),
    };
  }
}

function createDefaultMonsterGroup() {
  return {
    level: 0,
  };
}
