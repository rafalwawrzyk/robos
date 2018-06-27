import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App/App';
import './index.css';

import { searchRobotsReducer,requestRobotsReducer } from './containers/App/reducers';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from "redux-thunk";
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const rootReducer = combineReducers({searchRobotsReducer,requestRobotsReducer})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
