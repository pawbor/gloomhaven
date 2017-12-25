import React from 'react';
import classNames from 'classnames';

import * as elementIcons from 'assets/elements';

import './element-renderers.css';

const ElementMacroComponent = ({
  isOverlay = false,
  icon,
}) => (
  <img
    className={classNames('ElementMacro', {
      'ElementMacro-Overlay': isOverlay,
    })}
    alt=""
    src={icon}
  />
);

const makeElementRenderer = (props) => (key) => (
  <ElementMacroComponent key={key} {...props} />
);

export default {
  'element-air': makeElementRenderer({
    icon: elementIcons.airIcon,
  }),
  'element-any': makeElementRenderer({
    icon: elementIcons.anyIcon,
  }),
  'element-dark': makeElementRenderer({
    icon: elementIcons.darkIcon,
  }),
  'element-earth': makeElementRenderer({
    icon: elementIcons.earthIcon,
  }),
  'element-fire': makeElementRenderer({
    icon: elementIcons.fireIcon,
  }),
  'element-ice': makeElementRenderer({
    icon: elementIcons.iceIcon,
  }),
  'element-light': makeElementRenderer({
    icon: elementIcons.lightIcon,
  }),
  'element-use': makeElementRenderer({
    icon: elementIcons.useIcon,
    isOverlay: true,
  }),
};
