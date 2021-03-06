import createStore from './configureStore';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

// LOAD THE LOCAL STATE FROM THE LOCALSTORAGE
const persistedState = loadState();
const initialState = {
  ui: {
    isLoading: false,
    data: {}
  }
}

// SELECT A APP STATE, IF A USER ALREADY HAS STATE VS A NEW USER
function selectAppState(initialState, persistedState){
  //return initialState //Include this line if you do not want to use persisted state (used for testing)
  if (persistedState === undefined){
    return initialState
  } else{
    return initialState
  }
}

const store = createStore(
  selectAppState(
    initialState,
    persistedState
  )
);

// SAVE STATE TO LOCAL STORE EVERY TIME CHANGES

// ENABLE ALL THIS ON PRODUCTION
store.subscribe(throttle(()=> {
  saveState({
    ui: store.getState().ui
  });
}, 1000));

export default store;
