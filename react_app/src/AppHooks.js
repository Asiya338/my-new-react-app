//hooks
//useState
import ReactDOM from "react-dom/client";
import { React, useEffect, useState } from "react";

function AppHooks() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("pink")}>pink</button>
    </>
  );
}

//export default AppHooks;
/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppHooks />); */

//hooks are not applied to class components
//useState hook is to keep track of str , arrs, objs , comb of them

function AppHooks1() {
  const [car, setCar] = useState({
    brand: "hyundai",
    model: "ve3",
    year: 2020,
    color: "red",
  });
  const updateColor = () => {
    setCar((prevstate) => {
      return { ...prevstate, brand: "suzuki" };
    });
  };
  return (
    <>
      <h1>
        My car is {car.color} ,{car.brand} model {car.model} of year {car.year}
        <button onClick={updateColor}>Blue</button>
      </h1>
    </>
  );
}
//export default AppHooks1;

//useEffect => allow components to have side effects like fetching
/*
data form api
updating DOM 
timers
has 2 args=> func , ,dependency => optinal */

function AppHooks2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
//export default AppHooks2;
//w/o dependency setTimeout  runs indefinitely
//add [] to stop

//fecth data from api
/*
 uses fetch func to fetch data with api url and then calls to
 set data function to update state with the fetched data
 useEffect function in fetching data
 */
function AppHooks3() {
  let [user, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        "error in loading ";
      });
  }, []); //dependency empty arr []

  return (
    <div>
      <h1>User LIst</h1>
      <ul>
        {user.map((use) => (
          <li key={use.id}>
            {use.name} , {use.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

//export default AppHooks3;

/**
 * useContext => manage state globally
 * useRef =>
 * useReducer =>similar to useState
 *
 * useMemo=>returns memorized value
 * useCallback => returns memorized callback func
 *cuatom hooks => start with 'use' and like useFetch 
 to reuse functional comps
 
 */
