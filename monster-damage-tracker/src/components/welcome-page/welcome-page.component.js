import React from 'react';

import './welcome-page.component.css';

export default ({ onOpenScenarioCreator }) => {
  return (
    <div className="WelcomePage">
      <button
        className="WelcomePage-NewScenarioButton"
        onClick={handleClickNewScenarioButton}
      >
        New scenario
      </button>
    </div>
  );

  function handleClickNewScenarioButton() {
    onOpenScenarioCreator();
  }
};
