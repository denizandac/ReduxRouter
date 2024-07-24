const redux = require("redux");

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.amount,
      };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

export default store;
