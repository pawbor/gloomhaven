import React from 'react';

import MonsterGroupsSelector from 'components/monster-groups-selector/monster-groups-selector.component';
import ScenarioPage from 'components/scenario-page/scenario-page.component';
import WelcomePage from 'components/welcome-page/welcome-page.component';

import './app.component.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMonsterGroupsSelectorOpened: false,
      currentScenario: null,
    };
  }

  render() {
    const content = this.renderContent();
    return <div className="App">{content}</div>;
  }

  handleStartNewScenario = (currentScenario) => {
    this.setState({
      isMonsterGroupsSelectorOpened: true,
      currentScenario: {
        monsterGroups: {},
      },
    });
  };

  handleCloseMonsterGroupsSelector = () => {
    this.setState({
      isMonsterGroupsSelectorOpened: false,
    });
  };

  handleChangeCurrentScenario = (currentScenario) => {
    this.setState({
      currentScenario,
    });
  };

  renderContent = () => {
    const {
      handleStartNewScenario,
      handleCloseMonsterGroupsSelector,
      handleChangeCurrentScenario,
    } = this;

    const {
      isMonsterGroupsSelectorOpened,
      currentScenario,
    } = this.state;

    if (isMonsterGroupsSelectorOpened) {
      return (
        <MonsterGroupsSelector
          currentScenario={currentScenario}
          onChangeCurrentScenario={
            handleChangeCurrentScenario
          }
          onCloseMonsterGroupsSelector={
            handleCloseMonsterGroupsSelector
          }
        />
      );
    }

    if (currentScenario) {
      return (
        <ScenarioPage
          currentScenario={currentScenario}
          onChangeCurrentScenario={
            handleChangeCurrentScenario
          }
        />
      );
    }

    return (
      <WelcomePage
        onStartNewScenario={handleStartNewScenario}
      />
    );
  };
}

export default App;
