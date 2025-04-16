export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("reduxState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load session state", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Could not save session state", err);
  }
};
