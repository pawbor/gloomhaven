import React from 'react';

import './welcome-page.component.css';

export default ({ onOpenScenarioCreator }) => {
  const welcomeMessage1 = 'Welcome to monster tracker.';
  const welcomeMessage2 =
    'Press button below to start your adventure.';

  return (
    <div className="WelcomePage">
      <div className="WelcomePage-Content">
        <div className="WelcomePage-Message">
          <div>{welcomeMessage1}</div>
          <div>{welcomeMessage2}</div>
        </div>
        <button
          className="WelcomePage-NewScenario"
          onClick={handleClickNewScenarioButton}
        >
          New scenario
        </button>
      </div>
    </div>
  );

  function handleClickNewScenarioButton() {
    onOpenScenarioCreator();
  }
};
