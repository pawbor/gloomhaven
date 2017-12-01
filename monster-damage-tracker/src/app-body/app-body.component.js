import React from 'react';

import MonstersSelector from 'monsters-selector/monsters-selector.component';
import { prepareMonsters } from 'utils/monsters-data-utils';
import monstersData from 'monsters.json';

import './app-body.component.css';

function handleMonstersSelectionChange(selectedMonsters) {
  this.setState({
    selectedMonsters,
  });
}

class AppBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: prepareMonsters(monstersData),
      selectedMonsters: [],
    };

    this.handleMonstersSelectionChange = handleMonstersSelectionChange.bind(
      this
    );
  }

  render() {
    return (
      <div className="AppBody">
        <div className="AppBody-monstersSelector">
          <MonstersSelector
            monsters={this.state.monsters}
            selectedMonsters={this.state.selectedMonsters}
            onSelectionChange={
              this.handleMonstersSelectionChange
            }
          />
        </div>
      </div>
    );
  }
}

export default AppBody;
