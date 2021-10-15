import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMessage from '../redux/slice';

const Greeting = () => {
  const dispatch = useDispatch();   

  const greeting = useSelector((state) => state.messageReducer.message);
  console.log(greeting);

  useEffect( async() => {
      dispatch(getMessage());
  }, []);

    return (
      <React.Fragment>
        <h1>
          Greeting: {greeting}
        </h1>
      </React.Fragment>
    );
}

export default Greeting;
