import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   //we are overriding constructor function
  //   //super is a reference to the parent's constructor function. Super calls the parent's or React.Component's constructor function. Need to initialize constructor function
  //   super(props);
  //   //only time we directly assign state
  //   this.state = {
  //     //property/value
  //     lat: null,
  //     errorMessage: ""
  //   };
  // }
  //babel builds the contructor for us.
  state = {
    lat: null,
    errorMessage: ""
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //first callback -success callback
      position => this.setState({ lat: position.coords.latitude }),
      //never directly assign setState - only when initializing
      //second callback -when failed to find location
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    //react says we have to define render. Otherwise we get an error
    //conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      //passing state in a prop
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
