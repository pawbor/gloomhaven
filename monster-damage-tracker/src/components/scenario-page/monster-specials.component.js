import React from 'react';
import classNames from 'classnames';

import './monster-specials.component.css';

export default ({ specials, className }) => {
  const { special1, special2 } = specials;
  const special1Actions = special1.map(renderSpecialAction);
  const special2Actions = special2.map(renderSpecialAction);

  return (
    <div
      className={classNames('MonsterSpecials', className)}
    >
      <div className="MonsterSpecials-Element">
        <span className="MonsterSpecials-Label">
          Special 1:
        </span>
        {special1Actions}
      </div>
      <div className="MonsterSpecials-Element">
        <span className="MonsterSpecials-Label">
          Special 2:
        </span>
        {special2Actions}
      </div>
    </div>
  );

  function renderSpecialAction(action, index) {
    return (
      <span className="MonsterSpecials-Action" key={index}>
        {action}
      </span>
    );
  }
};
