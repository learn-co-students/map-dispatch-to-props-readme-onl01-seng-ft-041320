import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // this.props.store.dispatch(addItem());
    this.props.addItem()
  }

  render() {
    // debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// export default connect(mapStateToProps, { addItem })(App);

// ----------------------------------------------------------------
//make the entire state available as a prop:
// const mapStateToProps = state => {
//   return state
// }

// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
// ------------------------------------
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch (addItem())
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// ------------------------------------
export default connect(state => ({ items: state.items}), { addItem })(App);
