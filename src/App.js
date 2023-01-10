import logo from "./logo.svg";
import "./App.css";

function App() {
  const testString =
    process.env.REACT_APP_ENABLE_PHONE_TEST === "true" ? "có" : "không";
  return (
    <div className="App">
      <h1>{testString}</h1>
    </div>
  );
}

export default App;
