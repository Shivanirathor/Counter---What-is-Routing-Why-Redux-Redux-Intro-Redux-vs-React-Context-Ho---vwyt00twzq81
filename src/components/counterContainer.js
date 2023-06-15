// import { connect } from "react-redux";
// import Counter from "./counter";
// import { increment, decrement, reset } from "../actions";

// const mapStateToProps = (state) => {
//     return {
//         counter: state,
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement()),
//         reset: () => dispatch(reset()),
//     };
// };

// add code here
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions';
import Counter from './Counter';

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

// Map action creators to component props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};

// Connect Redux store to the Counter component
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
