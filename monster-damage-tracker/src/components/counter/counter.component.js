import React from 'react';
import classNames from 'classnames';

import { noop } from 'utils/function-utils';

import './counter.component.css';

const Counter = ({
  value,
  onChangeValue = noop,
  className,
}) => {
  return (
    <div className={classNames('Counter', className)}>
      <div
        className="Counter-Down"
        onClick={handleClickDown}
      >
        <span>{'<'}</span>
      </div>
      <div className="Counter-Value">{value}</div>
      <div className="Counter-Up" onClick={handleClickUp}>
        <span>{'>'}</span>
      </div>
    </div>
  );

  function handleClickDown() {
    onChangeValue(value - 1);
  }

  function handleClickUp() {
    onChangeValue(value + 1);
  }
};

export default Counter;
