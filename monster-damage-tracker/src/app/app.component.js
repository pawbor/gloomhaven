import React from 'react';

import AppBody from 'app-body/app-body.component';
import AppHeader from 'app-header/app-header.component';

import './app.component.css';

export default () => (
  <div className="App">
    <AppHeader />
    <AppBody />
  </div>
);
