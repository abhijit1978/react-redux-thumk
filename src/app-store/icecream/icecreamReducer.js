import { SELL_ICECREAM } from "./actionTypes";

const initialState = {
  availableIcecreams: 100
};

export const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_ICECREAM:
      return {
        ...state,
        availableIcecreams: state.availableIcecreams - 1
      };

    default:
      return state;
  }
};

export default icecreamReducer;
