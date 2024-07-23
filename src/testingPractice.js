// import React from "react";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { count: 5 };
//     this.handlerDecrement = this.handlerDecrement.bind(this);
//     this.handlerIncrement = this.handlerIncrement.bind(this);
//   }
//   // ! class handler methods
//   //  1) Decrement test method
//   handlerDecrement() {
//     this.setState((curStat) => {
//       return { count: curStat.count > 0 ? curStat.count - 1 : curStat.count };
//     });
//   }
//   //  2) Increment test method
//   handlerIncrement() {
//     this.setState((curStat) => {
//       return { count: curStat.count + 1 };
//     });
//   }
//   // ! Render Method like the functional Component
//   render() {
//     const date = new Date("july 23 2024");
//     date.setDate(date.getDate() + this.state.count);
//     return (
//       <div>
//         <button style={{ fontSize: "30px" }} onClick={this.handlerDecrement}>
//           ➖
//         </button>{" "}
//         <span style={{ fontSize: "30px" }}>
//           {" "}
//           {date.toDateString()} [{this.state.count}]{" "}
//         </span>{" "}
//         <button style={{ fontSize: "30px" }} onClick={this.handlerIncrement}>
//           ➕
//         </button>
//       </div>
//     );
//   }
// }
// export default Counter;
