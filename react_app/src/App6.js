//react events
//lists the
//call every item of list by map() function
// https://codevita.tcsapps.com/
function Lists(props) {
  return <li> Iam a {props.brand}</li>;
}
//used to build single page application
function Cars() {
  const cars = [
    {
      id: 1,
      brand: "suzuki",
    },
    { id: 2, brand: "suzuki" },
  ];
  return (
    <>
      <h1>header</h1>
      <ul>
        {cars.map((car) => {
          <Lists key={car.id} brand={car.brand} />;
        })}
      </ul>
    </>
  );
}
export default Cars;
//key is unique way to represent  every item in the list
//and whenever any changes occur only that particular
// item isrendered instead of entire list
//export default Cars;

//forms
//data is handled by DOM (Documentobjectmodel)=> html
//in react => components
//control changes by onChange event handlers
//routers
//npm i -D react-router-dom => install react-router-dom
//BrowserRouter  ,
//Router
//Route
