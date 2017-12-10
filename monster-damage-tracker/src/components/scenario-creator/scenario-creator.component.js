import React from 'react';

import Card from 'components/card/card.component';
import MonsterGroupList from 'components/monster-group-list/monster-group-list.component';
import Scrollable from 'components/scrollable/scrollable.component';
import { noop } from 'utils/function-utils';
import { allMonsters } from 'utils/monsters-data-utils';
import { toggleArrayElement } from 'utils/array-utils';

import './scenario-creator.component.css';

class ScenarioCreator extends React.Component {
  static defaultProps = {
    onStartScenario: noop,
    onCloseScenarioCreator: noop,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedMonsters: [],
    };

    this.handleClickMonster = this.handleClickMonster.bind(
      this
    );

    this.handleClickStart = this.handleClickStart.bind(
      this
    );

    this.handleClickCancel = this.handleClickCancel.bind(
      this
    );
  }

  render() {
    const { selectedMonsters } = this.state;

    const {
      handleClickMonster,
      handleClickStart,
      handleClickCancel,
    } = this;

    return (
      <div className="ScenarioCreator">
        <Card className="ScenarioCreator-Card">
          <Scrollable className="ScenarioCreator-MonsterList">
            <MonsterGroupList
              monsters={allMonsters}
              selectedMonsters={selectedMonsters}
              onClickMonster={handleClickMonster}
            />
          </Scrollable>
          <div className="ScenarioCreator-Actions">
            <button
              className="ScenarioCreator-CancelButton Button-danger"
              onClick={handleClickCancel}
            >
              Cancel
            </button>
            <button
              className="ScenarioCreator-StartButton Button-primary"
              onClick={handleClickStart}
            >
              Start
            </button>
          </div>
        </Card>
      </div>
    );
  }

  handleClickMonster(monster) {
    this.setState(prevState => {
      return {
        selectedMonsters: toggleArrayElement(
          prevState.selectedMonsters,
          monster
        ),
      };
    });
  }

  handleClickStart() {
    const {
      onStartScenario,
      onCloseScenarioCreator,
    } = this.props;

    const { selectedMonsters } = this.state;

    const scenario = {
      monsterGroups: selectedMonsters.map(
        monster => monster.name
      ),
    };

    onStartScenario(scenario);
    onCloseScenarioCreator();
  }

  handleClickCancel() {
    const { onCloseScenarioCreator } = this.props;

    onCloseScenarioCreator();
  }
}

export default ScenarioCreator;
