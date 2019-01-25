import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    //we are overriding constructor function
    //super is a reference to the parent's constructor function. Super calls the parent's or React.Component's constructor function. Need to initialize constructor function
    super(props);
    //only time we directly assign state
    this.state = {
      //property/value
      lat: null
    };
    window.navigator.geolocation.getCurrentPosition(
      //first callback -success callback
      position => {
        //never directly assign setState - only when initializing
        this.setState({ lat: position.coords.latitude });
      },
      //second callback -when failed to find location
      err => console.log(err)
    );
  }
  render() {
    //react says we have to define render. Otherwise we get an error

    return <div>Lattitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
