import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))