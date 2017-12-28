import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import MonsterGroupsSelector from 'components/monster-groups-selector/monster-groups-selector.component';
import ScenarioPage from 'components/scenario-page/scenario-page.component';
import WelcomePage from 'components/welcome-page/welcome-page.component';

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
                onChangeCurrentScenario={
                  handleChangeCurrentScenario
                }
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

  handleCloseMonsterGroupsSelector = (history) => () => {
    history.push('/groups-statistics');
  };

  handleChangeCurrentScenario = (currentScenario) => {
    this.setState({
      currentScenario,
    });
  };
}

export default App;
