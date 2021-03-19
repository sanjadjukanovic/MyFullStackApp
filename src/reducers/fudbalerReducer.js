import {
  GET_FUDBALER,
  GET_FUDBALERI,
  DELETE_FUDBALER,
  GET_FUDBALER_ID,
} from "../actions/types";

const initialState = {
  fudbaleri: [],
  fudbaler: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FUDBALER:
      return {
        ...state,
        fudbaler: action.payload,
      };

    case GET_FUDBALER_ID:
      return {
        ...state,
        fudbaler: action.payload,
      };

    case GET_FUDBALERI:
      return {
        ...state,
        fudbaleri: action.payload,
      };

    case DELETE_FUDBALER:
      return {
        ...state,
        // fudbaleri: state.fudbaleri.filter(
        //     (fudbaler)=>fudbaler.fudbalerId !=action.payload
        // )
      };

    default:
      return state;
  }
}
