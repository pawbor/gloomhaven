import monstersData from 'monsters.json';

import { mapElements } from './array-utils';
import {
  hashMapToArray,
  arrayToHashMapByProperty,
} from './hash-map-utils';
import {
  pipe,
  constant,
  extractProperty,
} from './function-utils';

export const MonsterType = {
  Common: 'Common',
  Boss: 'Boss',
};

export const allMonsterGroups = processMonsters(
  monstersData
);

export const monsterGroupsByName = arrayToHashMapByProperty(
  'name'
)(allMonsterGroups);

function processMonsters(monstersData) {
  return [
    ...processCommonGroups(monstersData),
    ...processBossGroups(monstersData),
  ];
}

function processCommonGroups(monstersData) {
  return pipe(
    constant(monstersData),
    extractProperty('monsters'),
    hashMapToArray,
    mapElements(processCommonGroup)
  )();
}

function processBossGroups(monstersData) {
  return pipe(
    constant(monstersData),
    extractProperty('bosses'),
    hashMapToArray,
    mapElements(processBossGroup)
  )();
}

function processCommonGroup(commonGroup) {
  return {
    name: monsterGroupName(commonGroup),
    stats: monsterGroupStats(commonGroup),
    type: MonsterType.Common,
  };
}

function processBossGroup(bossGroup) {
  return {
    name: monsterGroupName(bossGroup),
    stats: monsterGroupStats(bossGroup),
    type: MonsterType.Boss,
  };
}

function monsterGroupName(monsterGroup) {
  return monsterGroup.key;
}

function monsterGroupStats({ value: monsterData }) {
  return pipe(
    constant(monsterData),
    extractProperty('level'),
    arrayToHashMapByProperty('level')
  )();
}
