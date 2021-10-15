const GET_MESSAGE = 'message/slice/GET_MESSAGE';
const GET_MESSAGE_SUCCESS = 'message/slice/GET_MESSAGE_SUCCESS';
const GET_MESSAGE_ERR = 'message/slice/GET_MESSAGE_ERR';



const getMessage = () => async (dispatch) => {
  dispatch({ type: GET_MESSAGE });
  const response = await fetch('v1/messages');
  const message = await response.json();
  console.log(message.body);
  return dispatch({ type: GET_MESSAGE_SUCCESS, message });
};

export {
  getMessage as default,
  GET_MESSAGE,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_ERR,
};