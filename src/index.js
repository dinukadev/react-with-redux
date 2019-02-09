import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';


const rootReducers = combineReducers({
   ctr: counterReducer,
   res: resultReducer
});

const logger = store=>{
    return next=>{
        return action =>{
            console.log('Middleware dispatching',action);
            const result = next(action);
            console.log('Middleware next state',store.getState())
            return result;
        }
    }
};
const store = createStore(rootReducers,applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
