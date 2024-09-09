function Joke(props) {
  return (
    <>
      <h1 style={{ display: !props.question && "none" }}>
        question : {props.question}
      </h1>
      <h3 style={{ color: "purple" }}>anser : {props.answer}</h3>
      <hr />
    </>
  );
}
export default Joke;
