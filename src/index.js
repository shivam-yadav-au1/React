import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Relevent Persons"/>, document.getElementById('root'));
registerServiceWorker();
