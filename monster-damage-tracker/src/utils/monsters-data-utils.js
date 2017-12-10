import monstersData from 'monsters.json';

import { mapElements } from './array-utils';
import {
  hashMapToArray,
  arrayToHashMapByProperty,
} from './hash-map-utils';
import { pipe } from './function-utils';

export const MonsterType = {
  Common: 'Common',
  Boss: 'Boss',
};

const emptyMonster = () => ({});

const appendMonsterName = (
  partialMonster,
  { key: name }
) => ({
  name,
});

const appendMonsterType = type => partialMonster => ({
  ...partialMonster,
  type,
});

const processMonsterStats = arrayToHashMapByProperty(
  'level'
);

const appendMonsterStats = (
  partialMonster,
  { value: monsterData }
) => ({
  ...partialMonster,
  stats: processMonsterStats(monsterData.level),
});

const processCommonGroupData = pipe(
  emptyMonster,
  appendMonsterName,
  appendMonsterStats,
  appendMonsterType(MonsterType.Common)
);

const processBossGroupData = pipe(
  emptyMonster,
  appendMonsterName,
  appendMonsterStats,
  appendMonsterType(MonsterType.Boss)
);

const processCommonGroups = pipe(
  hashMapToArray,
  mapElements(processCommonGroupData)
);

const processBossGroups = pipe(
  hashMapToArray,
  mapElements(processBossGroupData)
);

function processMonsters(monstersData) {
  const common = processCommonGroups(monstersData.monsters);

  const bosses = processBossGroups(monstersData.bosses);

  return [...common, ...bosses];
}

export const allMonsterGroups = processMonsters(
  monstersData
);
export const monsterGroupsByName = arrayToHashMapByProperty(
  'name'
)(allMonsterGroups);
