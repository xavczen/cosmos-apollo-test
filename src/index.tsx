import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const { renderMode, baseURL } = (window as any).settingsForDataExport;

ReactDOM.render(
  <App renderMode={renderMode} baseURL={baseURL} />,
  document.getElementById('root')
);
registerServiceWorker();
