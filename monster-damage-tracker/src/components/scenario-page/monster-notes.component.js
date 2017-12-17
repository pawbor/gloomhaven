import React from 'react';
import classNames from 'classnames';

import './monster-notes.component.css';

export default ({ notes, className }) => {
  return notes ? (
    <div className={classNames('MonsterNotes', className)}>
      <span className="MonsterNotes-Label">Notes:</span>
      <span className="MonsterNotes-Value">{notes}</span>
    </div>
  ) : null;
};
