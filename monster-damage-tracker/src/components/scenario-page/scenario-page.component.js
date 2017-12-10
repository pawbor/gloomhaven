import React from 'react';

import { monstersByName } from 'utils/monsters-data-utils';

import MonsterGroupTracker from './monster-group-tracker.component';
import './scenario-page.component.css';

class ScenarioPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { currentScenario } = this.props;

    const monsterGroupTrackers = currentScenario.monsterGroups
      .map(monsterName => monstersByName[monsterName])
      .map(monsterGroup => (
        <MonsterGroupTracker
          monsterGroup={monsterGroup}
          groupLevel={0}
          key={monsterGroup.name}
        />
      ));
    return (
      <ul className="ScenarioPage">
        {monsterGroupTrackers}
      </ul>
    );
  }
}

export default ScenarioPage;
