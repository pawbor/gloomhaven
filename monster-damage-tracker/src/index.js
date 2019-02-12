import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import 'styles/index.css';

import App from './app.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
