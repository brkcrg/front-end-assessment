// ASSESSMENT:
// You will be implementing a table with its content fetched from https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
// You will use functional components and hooks
// And a simple table styling in question1.css
// An example UI of a working version is presented in question1.gif
//



// BONUS POINT: implement pagination feature with Previous-Next buttons
// _start and _limit are query parameters which you can use to fetch some of the items, which is called 'pagination'
// _limit is always 10 for our case, but _start parameter can be changed to fetch portions of that data


// SOLUTION:
// React and ReactDOM is already imported in index.html


import React , { useEffect,useState } from "react";
const [todos, setTodos] = useState();

var Start=0;
var Limit=10;
//Eğer sıkıntı çıkarsa state taşımalıyım.


const Next =()=>{

  Start+=10;
  Limit+= 10;

   fetch(`https://jsonplaceholder.typicode.com/todos?_start=${Start}&_limit=${Limit}`)
     .then((response) => response.json())
     .then((data) => setTodos(data));
     

};
const Previous = () => {
  Start -= 10;
  Limit -= 10;

  fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${Start}&_limit=${Limit}`
  )
    .then((response) => response.json())
    .then((data) => setTodos(data));
};

useEffect(() => {
  
  fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
    .then((response) => response.json())
    .then((data) => setTodos(data));


}, []);


function App() {
  return (
    <>
      {" "}
      <div className="table-scrollable">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" style={{ width: "250px !important" }}>
                id
              </th>
              <th scope="col" style={{ width: "250px" }}>
                userId
              </th>
              <th scope="col" style={{ width: "250px" }}>
                title
              </th>
              <th scope="col" style={{ width: "250px" }}>
                completed
              </th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((item,key) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.completed}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="btnGroup">
        <button id="button" className="button" onClick={() => Next()}>
          Next
        </button>
        <button id="button" className="button" onClick={() => Previous()}>
          Previous
        </button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
