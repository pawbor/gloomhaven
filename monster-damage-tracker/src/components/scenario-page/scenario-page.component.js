import React from 'react';

import { monsterGroupsByName } from 'utils/monsters-data-utils';
import { noop } from 'utils/function-utils';

import MonsterGroupTracker from './monster-group-tracker.component';
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
    const { currentScenario } = this.props;

    const monsterGroupTrackers = currentScenario.monsterGroups
      .map(groupName => monsterGroupsByName[groupName])
      .map(monsterGroup => {
        const { monsterGroupLevels } = currentScenario;
        const groupLevel =
          monsterGroupLevels[monsterGroup.name];
        const handleChangeGroupLevel = this.makeHandleChangeGroupLevel(
          monsterGroup.name
        );
        return (
          <MonsterGroupTracker
            monsterGroup={monsterGroup}
            groupLevel={groupLevel}
            onChangeGroupLevel={handleChangeGroupLevel}
            key={monsterGroup.name}
          />
        );
      });

    return (
      <ul className="ScenarioPage">
        {monsterGroupTrackers}
      </ul>
    );
  }

  makeHandleChangeGroupLevel(monsterName) {
    const {
      currentScenario,
      onChangeCurrentScenario,
    } = this.props;

    return groupLevel => {
      onChangeCurrentScenario({
        ...currentScenario,
        monsterGroupLevels: {
          ...currentScenario.monsterGroupLevels,
          [monsterName]: groupLevel,
        },
      });
    };
  }
}

export default ScenarioPage;
