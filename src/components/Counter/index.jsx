import React, { useState } from "react";
// import PropTypes from 'prop-types';

Counter.propTypes = {};

function Counter(props) {
  const [counter, setCount] = useState(0);
  return (
    <div>
      {counter}
      <button onClick={() => setCount((x) => x + 1)}>Increase</button>
      <button onClick={() => setCount((x) => x - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
