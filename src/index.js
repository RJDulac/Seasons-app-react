import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      //first callback -success callback
      position => console.log(position),
      //second callback -when failed to find location
      err => console.log(err)
    );
    return <div>Lattitude</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
