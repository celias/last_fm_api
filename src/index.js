import React from 'react';
import ReactDOM from 'react-dom';
import ApiCaller from './components/ApiCaller';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ApiCaller />, document.getElementById('root'));
registerServiceWorker();
