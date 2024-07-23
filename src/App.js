import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handlerDecrement = this.handlerDecrement.bind(this);
    this.handlerIncrement = this.handlerIncrement.bind(this);
  }
  // ! class handler methods
  //  1) Decrement test method
  handlerDecrement() {
    this.setState((curStat) => {
      return { count: curStat.count > 0 ? curStat.count - 1 : curStat.count };
    });
  }
  //  2) Increment test method
  handlerIncrement() {
    this.setState((curStat) => {
      return { count: curStat.count + 1 };
    });
  }
  // ! Render Method like the functional Component
  render() {
    return (
      <div>
        <button style={{ fontSize: "30px" }} onClick={this.handlerDecrement}>
          ➖
        </button>{" "}
        <span style={{ fontSize: "30px" }}> {this.state.count} </span>{" "}
        <button style={{ fontSize: "30px" }} onClick={this.handlerIncrement}>
          ➕
        </button>
      </div>
    );
  }
}
export default Counter;
