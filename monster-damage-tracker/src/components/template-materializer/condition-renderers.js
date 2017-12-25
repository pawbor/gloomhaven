import React from 'react';

import * as conditionIcons from 'assets/conditions';

import './condition-renderers.css';

const ConditionMacroComponent = ({ label, icon }) => (
  <span className="ConditionMacro">
    <span className="ConditionMacro-Label">{label}</span>{' '}
    <img
      className="ConditionMacro-Icon"
      alt=""
      src={icon}
    />
  </span>
);

const makeConditionRenderer = (props) => (key) => (
  <ConditionMacroComponent key={key} {...props} />
);

export default {
  'condition-bless': makeConditionRenderer({
    label: 'Bless',
    icon: conditionIcons.blessIcon,
  }),
  'condition-curse': makeConditionRenderer({
    label: 'Curse',
    icon: conditionIcons.curseIcon,
  }),
  'condition-disarm': makeConditionRenderer({
    label: 'Disarm',
    icon: conditionIcons.disarmIcon,
  }),
  'condition-immobilize': makeConditionRenderer({
    label: 'Immobilize',
    icon: conditionIcons.immobilizeIcon,
  }),
  'condition-invisible': makeConditionRenderer({
    label: 'Invisible',
    icon: conditionIcons.invisibleIcon,
  }),
  'condition-muddle': makeConditionRenderer({
    label: 'Muddle',
    icon: conditionIcons.muddleIcon,
  }),
  'condition-pierce': makeConditionRenderer({
    label: 'Pierce',
    icon: conditionIcons.pierceIcon,
  }),
  'condition-poison': makeConditionRenderer({
    label: 'Poison',
    icon: conditionIcons.poisonIcon,
  }),
  'condition-pull': makeConditionRenderer({
    label: 'Pull',
    icon: conditionIcons.pullIcon,
  }),
  'condition-push': makeConditionRenderer({
    label: 'Push',
    icon: conditionIcons.pushIcon,
  }),
  'condition-strengthen': makeConditionRenderer({
    label: 'Strengthen',
    icon: conditionIcons.strengthenIcon,
  }),
  'condition-stun': makeConditionRenderer({
    label: 'Stun',
    icon: conditionIcons.stunIcon,
  }),
  'condition-wound': makeConditionRenderer({
    label: 'Wound',
    icon: conditionIcons.woundIcon,
  }),
};
