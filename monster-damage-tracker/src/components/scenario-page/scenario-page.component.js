import React from 'react';

import './scenario-page.component.css';

class ScenarioPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { currentScenario } = this.props;
    console.log(currentScenario);
    return (
      <div className="ScenarioPage">
        Scenario: {JSON.stringify(currentScenario)}
      </div>
    );
  }
}

export default ScenarioPage;
