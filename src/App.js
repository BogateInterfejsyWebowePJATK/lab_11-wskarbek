import RandomNumberList from "./components/RandomNumberList";

function App() {
  return (
    <div className="App">
        <RandomNumberList size={10} min={1} max={10}/>
    </div>
  );
}

export default App;
