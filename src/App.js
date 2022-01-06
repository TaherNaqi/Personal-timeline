import logo from "./logo.svg";
import "./App.css";
import data from "./Components/data";
import Timelines from "./Components/Timelines";
function App() {
  let arrayData = data.map((datum) => <Timelines timeline={datum} />);
  return (
    <div className="App">
      <h1>Taher Naqi's Timeline</h1>
      <div className="list">{arrayData}</div>
    </div>
  );
}

export default App;
