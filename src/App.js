import Header from "./Components/Header";
import PokeList from "./Components/PokeList"


const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header  />
        <PokeList />
      </header>
    </div>
  );
}

export default App;
