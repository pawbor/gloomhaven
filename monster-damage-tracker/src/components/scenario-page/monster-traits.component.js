import React from 'react';
import classNames from 'classnames';

import { TemplateMaterializer } from 'components/template-materializer';

import './monster-traits.component.css';

const MonsterTraits = ({ traits, className }) => {
  const elements = traits.length
    ? traits.map(renderElement)
    : renderEmptyElement();

  return (
    <div className={classNames('MonsterTraits', className)}>
      <div className="MonsterTraits-Wrapper">
        <span className="MonsterTraits-Label">Traits:</span>
        {elements}
      </div>
    </div>
  );

  function renderElement(trait, index) {
    return (
      <span className="MonsterTraits-Element" key={index}>
        <TemplateMaterializer template={trait} />
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

export default MonsterTraits;
