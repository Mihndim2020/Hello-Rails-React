import React from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/slice';

const Greeting = () => {
  const dispatch = useDispatch(); 
  
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
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
Greeting.propTypes = {
  greeting = PropTypes.string
};

export default Greeting;
