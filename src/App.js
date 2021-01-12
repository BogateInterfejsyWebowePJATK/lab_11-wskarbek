import RandomNumberList from "./components/RandomNumberList";

function App() {
  return (
    <div className="App">
        <div className="RandomNumberList">
            <RandomNumberList size={10} min={1} max={10}/>
        </div>
    </div>
  );
}

export default App;
