import {
  toArray,
  extractKeyFromProperty,
  toHashMap,
} from './hash-map-utils';

const MonsterType = {
  Common: 'Common',
  Boss: 'Boss',
};

export function prepareMonsters(monstersData) {
  const commonMonstersProcessor = toArray(
    processCommonMonsterData
  );
  const common = commonMonstersProcessor(
    monstersData.monsters
  );

  const bossesProcessor = toArray(processBossData);
  const bosses = bossesProcessor(monstersData.bosses);

  return [...common, ...bosses];
}

function processCommonMonsterData(
  monsterData,
  monsterName
) {
  const stats = processMonsterStats(monsterData.level);
  return {
    name: monsterName,
    type: MonsterType.Common,
    stats,
  };
}

function processBossData(monsterData, monsterName) {
  const stats = processMonsterStats(monsterData.level);
  return {
    name: monsterName,
    type: MonsterType.Boss,
    stats,
  };
}

function processMonsterStats(monsterStats) {
  const keyExtractor = extractKeyFromProperty('level');
  return toHashMap(keyExtractor)(monsterStats);
}
