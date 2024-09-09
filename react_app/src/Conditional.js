export default function Conditinal(props) {
  /*  if (props.isFoalding === true) {
    return "loading ...";
  } else {
    return <>some stuff...</>;
  } */
  //ternary op
  return (
    <>
      <h2>Header</h2>
      {props.isFoalding === true ? (
        <div>loading</div>
      ) : (
        <div>some stuff...</div>
      )}
      <h2>Footer</h2>
    </>
  );
}
