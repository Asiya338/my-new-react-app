//import logo from "./logo.svg";
import "./App.css";
//import { useState } from "react";
/*
function App() {
  return (
  
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React form react.dev
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
*/

//form react.dev
/*
function Mybutton() {
  return <button>iam Button</button>;
}

function Myapp() {
  return (
    <>
      <h3>welcome to myapp</h3>
      <Mybutton />
    </>
  );
}
//export default keywords specify the main component in the file
export default Myapp;

//className usd to give class 

*/

/*
const user = {
  names: "Harry porter",
  imgurl: "https://i.imgur.com/yXOvdOSs.jpg",
  imgsize: 90,
};

function Myprofile() {
  return (
    <>
      <h2>{user.names}</h2>
      <div>
        <img
          className="img"
          src={user.imgurl}
          alt="img"
          style={{ width: user.imgsize, height: user.imgsize }}
        />
      </div>
    </>
  );
}

export default Myprofile;
*/
/*
const products = [
  { title: "cabbage", id: 1, isFruit: false },
  { title: "apple", id: 2, isFruit: true },
  { title: "flower", id: 3, isFruit: false },
];

function comps() {
  const listitems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "blue" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listitems}</ul>;
}
//export default comps;
function Clickevent() {
  function handle() {
    alert("u clicked me?");
  }
  return (
    <>
      <button onClick={handle}>click me</button>
    </>
  );
}*/
//export default Clickevent;
/*export default function App() {
  return (
    <>
      <Usestate />
      <Usestate />

      <Usestate />
    </>
  );
}
function Usestate() {
  const [count, setCount] = useState(0);
  function handle() {
    setCount(count + 1);
  }
  return <button onClick={handle}>clickd me {count} times</button>;
}
*/
/*
export default function App() {
  const [count, setCount] = useState(0);
  function handle() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handle}>clickd me {count} times</button>
      <button onClick={handle}>clickd me {count} times</button>
      <button onClick={handle}>clickd me {count} times</button>
    </>
  );
}
*/
//small react static appln as structure
/*FilterableProductTable
       SearchBar
       ProductTable
               ProductCategoryRow
               ProductRow 
*/

/*
const products = [
  { category: "fruit", price: "$1", isStocked: true, id: "apple" },
  { category: "fruit", price: "$3", isStocked: false, id: "custardapple" },
  { category: "fruit", price: "$2", isStocked: true, id: "pineapple" },
  { category: "vegetable", price: "$1", isStocked: true, id: "tomato" },
  { category: "vegetable", price: "$5", isStocked: true, id: "carrot" },
  { category: "vegetable", price: "$3", isStocked: false, id: "potato" },
];

function Searchbar() {
  return (
    <>
      <form>
        <input type="text" placeholder="search..."></input>
        <br />
        <input type="checkbox"></input>
        <h4>Only show products in stock</h4>
      </form>
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ products }) {
  let name = products.isStocked ? (
    products.id
  ) : (
    <span style={{ color: "red" }}>{products.id}</span>
  );
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{products.price}</td>
      </tr>
    </>
  );
}
function ProductTable({ products }) {
  let row = [];
  let lastCategory = null;
  products.forEach((p) => {
    if (p.category !== lastCategory) {
      row.push(<ProductCategoryRow category={p.category} key={p.category} />);
    }
    row.push(<ProductRow p={p} key={p.id} />);
    lastCategory = p.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>price</th>
        </tr>
      </thead>

      <tbody>{row}</tbody>
    </table>
  );
}

//construct using bottom-up heirarchy so all sub compnents
//are built first and then main parent cmpnenet that can be
// aggregated to give overall functionality desired for our app

function FilterableProductTable({ products }) {
  return (
    <div>
      <Searchbar />
      <ProductTable products={products} />
    </div>
  );
}

export default function App123() {
  return <FilterableProductTable products={products} />;
}*/

//small static app
/*
import Headerfunc from "./Myinfo";
import Footerfunc from "./Footer";
import Maincontent from "./Maincontent";
function App1() {
  return (
    <>
      <Headerfunc />
      <Maincontent />
      <Footerfunc />
    </>
  );
}
//export default App;
*/
