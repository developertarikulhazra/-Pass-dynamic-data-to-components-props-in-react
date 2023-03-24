import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = [
    "Ruble",
    "BappaDa",
    "Jahim",
    "Kuber",
    "Anower",
    "Riyaz",
    "Shakib Khan",
    "Shalman Sha",
  ];
  const actor = [
    { name: "Ruble", nayika: "Moushumi" },
    { name: "BappaDa", nayika: "Shabana" },
    { name: "Kuber", nayika: "kupila" },
    { name: "Riyaz", nayika: "Purnima" },
    { name: "Shakib khan", nayika: "Bubli" },
  ];
  console.log(actor);

  return (
    <div className="App">
      <h1>Dynamic data pass</h1>
      {/* {nayoks.map((nayok) => (
        <li>Name: {nayok} </li>
      ))}
     */}
      {/* 
      {nayika.map((naika) => (
        <Person nayika={naika}></Person>
      ))} */}
      {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))}
      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person nayika="kopila" name="Kuber"></Person> */}
      <h5>New component. Yay</h5>
      <p>React Mama</p>
      <Friend></Friend>
      <Friend></Friend>
      <hr />
      <hr />
      {actor.map((actor) => (
        <Person name={actor.name} nayika={actor.nayika}></Person>
      ))}
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1> {props.name}</h1>
      <h4> {props.nayika} </h4>
    </div>
  );
}

function Friend() {
  return (
    <div className="person">
      <h3>Name: Jahid Hasan</h3>
      <p>Job: Freelancing</p>
    </div>
  );
}

export default App;
