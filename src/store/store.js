import { createStore, applyMiddleware,compose, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {authReducer} from '../reducers/authReducer'
import {cardsReducer} from '../reducers/cardsReducer'
import {uiReducer} from '../reducers/uiReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  auth:authReducer,
  ui:uiReducer,
  card:cardsReducer
})

export const store = createStore(
 reducer,
 composeEnhancers(
   applyMiddleware(thunk)
 )
);
