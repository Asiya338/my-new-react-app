/*export default function Contactcard(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgurl}></img>
        <h3>{props.name}</h3>
        <p>{props.phone}</p>
      </div>
    </>
  );
}
*/

export default function Contactcard(props) {
  return (
    <>
      <div className="card">
        <img src={props.contacts.imgurl}></img>
        <h3>{props.contacts.name}</h3>
        <p>{props.contacts.phone}</p>
      </div>
    </>
  );
}
