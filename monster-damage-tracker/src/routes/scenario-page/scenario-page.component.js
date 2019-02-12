import React from 'react';

import { hashMapToArray } from 'utils/hash-map-utils';
import { noop } from 'utils/function-utils';
import { monsterGroupsByName } from 'utils/monsters-data-utils';

import MonsterGroupTracker from './components/monster-group-tracker.component';
import './scenario-page.component.css';

class ScenarioPage extends React.Component {
  static defaultProps = {
    onChangeCurrentScenario: noop,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { renderMonsterGroupTracker } = this;
    const { currentScenario } = this.props;

    const monsterGroupTrackers = hashMapToArray(
      currentScenario.monsterGroups
    )
      .map(({ key: groupName, value: groupState }) => ({
        groupData: monsterGroupsByName[groupName],
        groupState,
      }))
      .map(renderMonsterGroupTracker);

    return (
      <div className="ScenarioPage">
        {monsterGroupTrackers}
      </div>
    );
  }

  renderMonsterGroupTracker = ({
    groupData,
    groupState,
  }) => {
    const handleChangeGroupState = this.makeHandleChangeGroupState(
      groupData.name
    );
    return (
      <MonsterGroupTracker
        groupData={groupData}
        groupState={groupState}
        onChangeGroupState={handleChangeGroupState}
        key={groupData.name}
      />
    );
  };

  makeHandleChangeGroupState = (monsterGroupName) => {
    const {
      currentScenario,
      onChangeCurrentScenario,
    } = this.props;

    return (groupState) => {
      onChangeCurrentScenario({
        ...currentScenario,
        monsterGroups: {
          ...currentScenario.monsterGroups,
          [monsterGroupName]: groupState,
        },
      });
    };
  };
}

export default ScenarioPage;
