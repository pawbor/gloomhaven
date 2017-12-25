import React from 'react';

import * as abilityIcons from 'assets/abilities';

import './ability-renderers.css';

const AbilityMacroComponent = ({ label, icon }) => (
  <span className="AbilityMacro">
    <span className="AbilityMacro-Label">{label}</span>{' '}
    <img className="AbilityMacro-Icon" alt="" src={icon} />
  </span>
);

const makeAbilityRenderer = (props) => (key) => (
  <AbilityMacroComponent key={key} {...props} />
);

export default {
  'ability-attack': makeAbilityRenderer({
    label: 'Attack',
    icon: abilityIcons.attackIcon,
  }),
  'ability-flying': makeAbilityRenderer({
    label: 'Flying',
    icon: abilityIcons.flyIcon,
  }),
  'ability-heal': makeAbilityRenderer({
    label: 'Heal',
    icon: abilityIcons.healIcon,
  }),
  'ability-jump': makeAbilityRenderer({
    label: 'Jump',
    icon: abilityIcons.jumpIcon,
  }),
  'ability-loot': makeAbilityRenderer({
    label: 'Loot',
    icon: abilityIcons.lootIcon,
  }),
  'ability-move': makeAbilityRenderer({
    label: 'Move',
    icon: abilityIcons.moveIcon,
  }),
  'ability-range': makeAbilityRenderer({
    label: 'Range',
    icon: abilityIcons.rangeIcon,
  }),
  'ability-retaliate': makeAbilityRenderer({
    label: 'Retaliate',
    icon: abilityIcons.retaliateIcon,
  }),
  'ability-shield': makeAbilityRenderer({
    label: 'Shield',
    icon: abilityIcons.shieldIcon,
  }),
  'ability-target': makeAbilityRenderer({
    label: 'Target',
    icon: abilityIcons.targetIcon,
  }),
};
