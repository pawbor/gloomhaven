import React from 'react';
import classNames from 'classnames';

import { TemplateMaterializer } from 'components/template-materializer';

import './monster-conditions-immunity.component.css';

const MonsterConditionsImmunity = ({
  conditions,
  className,
}) => {
  const elements = conditions.length
    ? conditions.map(renderElement)
    : renderEmptyElement();

  return (
    <div
      className={classNames(
        'MonsterConditionsImmunity',
        className
      )}
    >
      <span className="MonsterConditionsImmunity-Label">
        Immune to:
      </span>
      {elements}
    </div>
  );

  function renderElement(condition, index) {
    return (
      <span
        className="MonsterConditionsImmunity-Element"
        key={index}
      >
        <TemplateMaterializer template={condition} />
      </span>
    );
  }

  function renderEmptyElement() {
    return (
      <span className="MonsterConditionsImmunity-Element">
        No conditions
      </span>
    );
  }
};

export default MonsterConditionsImmunity;
