import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ScenarioPage from 'routes/scenario-page/scenario-page.component';
import WelcomePage from 'routes/welcome-page/welcome-page.component';
import MonsterGroupsSelector from 'routes/scenario-monster-groups-selector-page/scenario-monster-groups-selector-page.component';

import './app.component.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScenario: {
        monsterGroups: {},
      },
    };
  }

  render() {
    const {
      handleStartNewScenario,
      handleCloseMonsterGroupsSelector,
      handleChangeCurrentScenario,
    } = this;

    const { currentScenario } = this.state;

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route
            exact
            path="/"
            render={({ history }) => (
              <WelcomePage
                onStartNewScenario={handleStartNewScenario(
                  history
                )}
              />
            )}
          />

          <Route
            path="/groups-selector"
            render={({ history }) => (
              <MonsterGroupsSelector
                currentScenario={currentScenario}
                onCloseMonsterGroupsSelector={handleCloseMonsterGroupsSelector(
                  history
                )}
              />
            )}
          />

          <Route
            path="/groups-statistics"
            render={() => (
              <ScenarioPage
                currentScenario={currentScenario}
                onChangeCurrentScenario={
                  handleChangeCurrentScenario
                }
              />
            )}
          />
        </div>
      </Router>
    );
  }

  handleStartNewScenario = (history) => (
    currentScenario
  ) => {
    history.push('/groups-selector');
  };

  handleCloseMonsterGroupsSelector = (history) => (
    currentScenario
  ) => {
    this.setState({
      currentScenario,
    });

    const redirectUrl = isAnyMonsterGroupSelected(
      currentScenario
    )
      ? '/groups-statistics'
      : '/';

    history.push(redirectUrl);
  };

  handleChangeCurrentScenario = (currentScenario) => {
    this.setState({
      currentScenario,
    });
  };
}

export default App;

function isAnyMonsterGroupSelected(scenario) {
  return !!Object.keys(scenario.monsterGroups).length;
}
