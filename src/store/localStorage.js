export const loadState = () => {
  try{
    const serializedState = localStorage.getItem('state');
    if (serializedState === null){
      return undefined;
    }
    console.log("LOADED STATE")
    return JSON.parse(serializedState);
  } catch(err){
    console.log("ERROR LOADING STATE: ", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    console.log("SAVED STATE")
  }catch(err){
    //
    console.log("ERROR SAVING STATE: ", err);
  }
}