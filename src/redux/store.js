import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from '../utils/localStorage';

const savedState = loadState();
const store = createStore(rootReducer, savedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;