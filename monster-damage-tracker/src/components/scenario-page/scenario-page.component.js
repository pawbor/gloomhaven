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
    const { renderMonsterGroupTracker } = this;
    const { currentScenario } = this.props;

    const monsterGroupTrackers = currentScenario.monsterGroups
      .map((groupName) => monsterGroupsByName[groupName])
      .map(renderMonsterGroupTracker);

    return (
      <div className="ScenarioPage">
        {monsterGroupTrackers}
      </div>
    );
  }

  renderMonsterGroupTracker = (monsterGroup) => {
    const { currentScenario } = this.props;
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
  };

  makeHandleChangeGroupLevel(monsterName) {
    const {
      currentScenario,
      onChangeCurrentScenario,
    } = this.props;

    return (groupLevel) => {
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
