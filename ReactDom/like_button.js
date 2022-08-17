'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// function App() {
//   return (
//     <div className="App">
//       <AppText />
//       <div></div>
//     </div>
//   );
// }
// const sortType = ["All", "active", "Complete"];
// function AppText(props) {
//   const storageAdd = JSON.parse(localStorage.getItem("adds"));
//   const [add, setAdd] = useState("");
//   const [editId, setEdit] = useState(false);
//   const [adds, setAdds] = useState(storageAdd ?? []);
//   const handleSubmit = () => {
//     setAdds((prev) => {
//       const addTasks = [...prev, add];
//       const jsonAdd = JSON.stringify(addTasks);
//       localStorage.setItem("adds", jsonAdd);
//       return addTasks;
//     });
//     setAdd("");
//   };
//   var removeAdd = function (add) {
//     setAdds((prev) => {
//       var newArray = prev.filter((item) => item !== add);
//       var jsonStringArray = JSON.stringify(newArray);
//       localStorage.setItem("adds", jsonStringArray);
//       return newArray;
//     });
//   };
//   var editAdd = function (add) {
//     setAdds((prev) => {
//       var newArray = prev.filter((item) => item === add);
//       this.state.
//       console.log(document.getElementById("input"));
      
//       return newArray;
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Todo Matic</h1>
//       <h3>What needs tobe done ?</h3>
//       <div className="addTasks">
//         <input
//           id="input"
//           type="text"
//           value={add}
//           onChange={(e) => setAdd(e.target.value)}
//         />
//         <button onClick={handleSubmit}> Add </button>
//       </div>
//       <div>
//         <button>Show all tasks</button>
//         <button>Show active tasks</button>
//         <button>Show completed tasks</button>
//       </div>
//       <div>
//         <h1>Tasks Remainding</h1>
        // <form action="#">
        //   {adds.map((add, index) => (
        //     <div>
        //       <p>
        //         <input type="checkbox" id={index} />
        //         <label for={index} key={index}>
        //           {add}
        //         </label>
        //       </p>
        //       <div>
        //         <button
        //           onClick={() => {
        //             editAdd(add);
        //           }}
        //         >
        //           Edit {add}
        //         </button>
        //         <button
        //           onClick={() => {
        //             removeAdd(add);
        //           }}
        //         >
        //           Delete {add}
        //         </button>
        //       </div>
        //     </div>
        //   ))}
        // </form>
//       </div>
//     </div>
//   );
// }
// export default App;
