import {   GET_MESSAGE,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_ERR, } from './slice';

// Initial state

const initialState = {
  message: "Good morning",
};

// Reducer

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return { ...state, pending: true };
    case GET_MESSAGE_SUCCESS:
    {
      console.log(action.message)
      const greet = action.message
      console.log(greet)
      return { ...state, pending: false, message: action.message.body };
    }
    case GET_MESSAGE_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default messageReducer;