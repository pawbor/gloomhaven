import React from 'react';
import classNames from 'classnames';

import * as aoeIcons from 'assets/aoes';

import './aoe-renderers.css';

const AoeSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  ExtraLarge: 'extraLarge',
};
const AoeMacroComponent = ({ size, icon }) => (
  <img
    className={classNames('AoeMacro', `AoeMacro-${size}`)}
    alt=""
    src={icon}
  />
);

const makeAoeRenderer = (props) => (key) => (
  <AoeMacroComponent key={key} {...props} />
);

export default {
  'aoe-circle': makeAoeRenderer({
    icon: aoeIcons.circleIcon,
    size: AoeSize.Medium,
  }),
  'aoe-circle-with-middle-black': makeAoeRenderer({
    icon: aoeIcons.circleWithMiddleBlackIcon,
    size: AoeSize.Medium,
  }),
  'aoe-circle-with-side-black': makeAoeRenderer({
    icon: aoeIcons.circleWithSideBlackIcon,
    size: AoeSize.Medium,
  }),
  'aoe-elder-drake-sp1': makeAoeRenderer({
    icon: aoeIcons.elderDrakeSpecial1Icon,
    size: AoeSize.Large,
  }),
  'aoe-inox-bodyguard-sp1': makeAoeRenderer({
    icon: aoeIcons.inoxBodyguardSpecial1Icon,
    size: AoeSize.Medium,
  }),
  'aoe-line-3-with-black': makeAoeRenderer({
    icon: aoeIcons.line3WithBlackIcon,
    size: AoeSize.Medium,
  }),
  'aoe-line-4-with-black': makeAoeRenderer({
    icon: aoeIcons.line4WithBlackIcon,
    size: AoeSize.Large,
  }),
  'aoe-line-6-with-black': makeAoeRenderer({
    icon: aoeIcons.line6WithBlackIcon,
    size: AoeSize.ExtraLarge,
  }),
  'aoe-rhomb-2-with-black': makeAoeRenderer({
    icon: aoeIcons.rhomb2WithBlackIcon,
    size: AoeSize.Medium,
  }),
  'aoe-sightless-eye-sp1': makeAoeRenderer({
    icon: aoeIcons.sightlessEyeSpecial1Icon,
    size: AoeSize.ExtraLarge,
  }),
  'aoe-sightless-eye-sp2': makeAoeRenderer({
    icon: aoeIcons.sightlessEyeSpecial2Icon,
    size: AoeSize.Large,
  }),
  'aoe-triangle-2-side': makeAoeRenderer({
    icon: aoeIcons.triangle2SideIcon,
    size: AoeSize.Small,
  }),
  'aoe-triangle-2-side-with-black': makeAoeRenderer({
    icon: aoeIcons.triangle2SideWithBlackIcon,
    size: AoeSize.Small,
  }),
  'aoe-triangle-3-side-with-corner-black': makeAoeRenderer({
    icon: aoeIcons.triangle3SideWithCornerBlackIcon,
    size: AoeSize.Medium,
  }),
};
