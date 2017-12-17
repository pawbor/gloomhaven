import React from 'react';
import classNames from 'classnames';

import './monster-traits.component.css';

export default ({ traits, className }) => {
  const elements = traits.length
    ? traits.map(renderElement)
    : renderEmptyElement();

  return (
    <div className={classNames('MonsterTraits', className)}>
      <span className="MonsterTraits-Label">Traits:</span>
      {elements}
    </div>
  );

  function renderElement(trait, index) {
    return (
      <span className="MonsterTraits-Element" key={index}>
        {trait}
      </span>
    );
  }

  function renderEmptyElement() {
    return (
      <span className="MonsterTraits-Element">
        No traits
      </span>
    );
  }
};
