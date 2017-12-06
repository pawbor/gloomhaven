import React from 'react';

import ScenarioCreator from 'components/scenario-creator/scenario-creator.component';
import ScenarioPage from 'components/scenario-page/scenario-page.component';
import WelcomePage from 'components/welcome-page/welcome-page.component';

import './app.component.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScenarioCreatorOpened: false,
      currentScenario: null,
    };

    this.handleOpenScenarioCreator = this.handleOpenScenarioCreator.bind(
      this
    );

    this.handleCloseScenarioCreator = this.handleCloseScenarioCreator.bind(
      this
    );

    this.handleStartScenario = this.handleStartScenario.bind(
      this
    );
  }

  render() {
    const content = this.getContent();
    return <div className="App">{content}</div>;
  }

  handleOpenScenarioCreator(currentScenario) {
    this.setState({
      isScenarioCreatorOpened: true,
    });
  }

  handleCloseScenarioCreator() {
    this.setState({
      isScenarioCreatorOpened: false,
    });
  }

  handleStartScenario(currentScenario) {
    this.setState({
      currentScenario,
    });
  }

  getContent() {
    const {
      handleOpenScenarioCreator,
      handleCloseScenarioCreator,
      handleStartScenario,
    } = this;

    const {
      isScenarioCreatorOpened,
      currentScenario,
    } = this.state;

    if (isScenarioCreatorOpened) {
      return (
        <ScenarioCreator
          onStartScenario={handleStartScenario}
          onCloseScenarioCreator={
            handleCloseScenarioCreator
          }
        />
      );
    }

    if (currentScenario) {
      return (
        <ScenarioPage currentScenario={currentScenario} />
      );
    }

    return (
      <WelcomePage
        onOpenScenarioCreator={handleOpenScenarioCreator}
      />
    );
  }
}

export default App;
