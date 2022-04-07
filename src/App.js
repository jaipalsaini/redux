import React, { Component } from 'react';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';
import { Container } from './counter/container';
import logo from './logo.svg';
import './App.css';
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction1: () => dispatch(simpleAction())
})

class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  simpleAction = (event) => {
    this.props.simpleAction1();
  }

 render() {
  return (
   <div className="App">

    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <Container/>
    <pre>
      {
        JSON.stringify(this.props)
      }
    </pre>
    <button onClick={this.simpleAction}>Test redux action</button>
   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);