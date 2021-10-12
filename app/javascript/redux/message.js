import {   GET_MESSAGE,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_ERR, } from './slice';

// Initial state

const initialState = {
 greeting: [],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return { ...state, pending: true };
    case GET_MESSAGE_SUCCESS:
    {
      const greeting = message.body; 
      return { ...state, pending: false, greeting };
    }
    case GET_MESSAGE_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;