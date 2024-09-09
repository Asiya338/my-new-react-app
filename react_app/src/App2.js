import Contactcard from "./Contactcard";
import Joke from "./Joke";
function Daytime() {
  const styles = {
    color: "#ff1212",
    background: "yellow",
  };
  const date = new Date();
  let time = 0;
  const hours = date.getHours();
  if (hours < 12) {
    time = "good night";
    styles.color = "black";
  } else {
    time = "good day!";
    styles.color = "blue";
  }
  //inline css
  //  return <h1 style={{ color: "#ff1212", background: "#101010" }}>{time}</h1>;

  return <h1 style={styles}> {time}</h1>;
}
//export default Daytime;

//props in js
/*
function App() {
  return (
    <>
      <div className="card">
        <div className="contact">
          <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="img1"></img>
          <h3>Harry Porter</h3>
          <br />
          <p>phone : 12313115465</p>
        </div>
        <div className="contact">
          <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="img1"></img>
          <h3>spanish dest</h3>
          <br />
          <p>phone : 51090115465</p>
        </div>
        <div className="contact">
          <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="img1"></img>
          <h3>mary kom</h3>
          <br />
          <p>phone : 123190905</p>
        </div>
      </div>
    </>
  );
}

export default App;
*/
/*
export default function App() {
  return (
    <>
      <div className="contact">
        <Contactcard
          name="Harry poerter"
          imgurl="https://i.imgur.com/yXOvdOSs.jpg"
          phone="908194983"
        />
        <Contactcard
          name="Harry poerter"
          imgurl="https://i.imgur.com/yXOvdOSs.jpg"
          phone="908194983"
        />
        <Contactcard
          name="Harry poerter"
          imgurl="https://i.imgur.com/yXOvdOSs.jpg"
          phone="908194983"
        />
      </div>
    </>
  );
}
*/

/*
export default function App() {
  return (
    <>
      <div className="contact">
        <Contactcard
          contacts={{
            name: "Harry poerter",
            imgurl: "https://i.imgur.com/yXOvdOSs.jpg",
            phone: "908194983",
          }}
        />

        <Contactcard
          contacts={{
            name: "mary lkon",
            imgurl: "https://i.imgur.com/yXOvdOSs.jpg",
            phone: "0919uw3",
          }}
        />

        <Contactcard
          contacts={{
            name: "Hspani duct",
            imgurl: "https://i.imgur.com/yXOvdOSs.jpg",
            phone: "90109212",
          }}
        />
      </div>
    </>
  );
}
*/
//props and styling
/*
function App() {
  return (
    <>
      <Joke answer="siayasuj" />
      <Joke question="qwrty" answer="siayasuj" />
      <Joke question="qwrty" answer="siayasuj" />
      <Joke question="qwrty" answer="siayasuj" />
      <Joke question="qwrty" answer="siayasuj" />
    </>
  );
}

//export default App;
*/
//mapping comps
//iterate trough each arr item
//map func has implicit return stmt
/*function App() {
  let arr = [1, 2, 3, 904];
  let doub = arr.map((a) => {
    return a * 2 + ",\t";
  });
  console.log(doub);
  return <>{doub}</>;
}

export default App;
*/
