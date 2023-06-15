// import React, { Component } from "react";
// class Counter extends Component {
//     render() {
//         const { counter, increment, decrement, reset } = this.props;
//         return (
//             <div className="App">
//                 <div>{counter}</div>
//                 <div>
//                     <button onClick={increment} id="#increment">
//                         INCREMENT BY 1
//                     </button>
//                 </div>
//                 <div>
//                     <button onClick={decrement}>DECREMENT BY 1</button>
//                 </div>
//                 <button onClick={reset}>RESET</button>
//             </div>
//         );
//     }
// }
// export default Counter;

import React from 'react';

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

