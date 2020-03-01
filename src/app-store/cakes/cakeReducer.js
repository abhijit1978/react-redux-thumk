import { SELL_CAKE } from "./actionType";

const initialState = {
  availableCakes: 50
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_CAKE:
      return {
        ...state,
        availableCakes: state.availableCakes - 1
      };
    default:
      return state;
  }
};

export default cakeReducer;
