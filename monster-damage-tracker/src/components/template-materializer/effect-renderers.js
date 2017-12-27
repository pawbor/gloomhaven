import React from 'react';

import * as effectsIcons from 'assets/effects';

import './effect-renderers.css';

const EffectMacroComponent = ({ label, icon }) => (
  <span className="EffectMacro">
    <span className="EffectMacro-Label">{label}</span>{' '}
    <img className="EffectMacro-Icon" alt="" src={icon} />
  </span>
);

const makeEffectRenderer = (props) => (key) => (
  <EffectMacroComponent key={key} {...props} />
);

export default {
  'effect-bless': makeEffectRenderer({
    label: 'Bless',
    icon: effectsIcons.blessIcon,
  }),
  'effect-curse': makeEffectRenderer({
    label: 'Curse',
    icon: effectsIcons.curseIcon,
  }),
  'effect-disarm': makeEffectRenderer({
    label: 'Disarm',
    icon: effectsIcons.disarmIcon,
  }),
  'effect-immobilize': makeEffectRenderer({
    label: 'Immobilize',
    icon: effectsIcons.immobilizeIcon,
  }),
  'effect-invisible': makeEffectRenderer({
    label: 'Invisible',
    icon: effectsIcons.invisibleIcon,
  }),
  'effect-muddle': makeEffectRenderer({
    label: 'Muddle',
    icon: effectsIcons.muddleIcon,
  }),
  'effect-pierce': makeEffectRenderer({
    label: 'Pierce',
    icon: effectsIcons.pierceIcon,
  }),
  'effect-poison': makeEffectRenderer({
    label: 'Poison',
    icon: effectsIcons.poisonIcon,
  }),
  'effect-pull': makeEffectRenderer({
    label: 'Pull',
    icon: effectsIcons.pullIcon,
  }),
  'effect-push': makeEffectRenderer({
    label: 'Push',
    icon: effectsIcons.pushIcon,
  }),
  'effect-strengthen': makeEffectRenderer({
    label: 'Strengthen',
    icon: effectsIcons.strengthenIcon,
  }),
  'effect-stun': makeEffectRenderer({
    label: 'Stun',
    icon: effectsIcons.stunIcon,
  }),
  'effect-wound': makeEffectRenderer({
    label: 'Wound',
    icon: effectsIcons.woundIcon,
  }),
};
