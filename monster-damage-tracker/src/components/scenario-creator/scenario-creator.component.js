import React from 'react';

import Card from 'components/card/card.component';
import MonsterGroupList from 'components/monster-group-list/monster-group-list.component';
import Scrollable from 'components/scrollable/scrollable.component';
import { noop } from 'utils/function-utils';
import { allMonsterGroups } from 'utils/monsters-data-utils';
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
      selectedMonsterGroups: [],
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
    const { selectedMonsterGroups } = this.state;

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
              monsterGroups={allMonsterGroups}
              selectedMonsterGroups={selectedMonsterGroups}
              onClickMonsterGroup={handleClickMonster}
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
        selectedMonsterGroups: toggleArrayElement(
          prevState.selectedMonsterGroups,
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

    const { selectedMonsterGroups } = this.state;

    const scenario = {
      monsterGroups: selectedMonsterGroups.map(
        ({ name }) => name
      ),
      monsterGroupLevels: selectedMonsterGroups.reduce(
        (levels, { name }) => ({
          ...levels,
          [name]: 0,
        }),
        {}
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
