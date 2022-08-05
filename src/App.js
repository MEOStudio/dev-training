import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import data from "./data/mockup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Study React
        </a>
      </header>
      <main className="App-body">
        {data.map((element) => {
          return (
            <Card title={element.title} content={element.content}>
              <div>Likes</div>
            </Card>
          );
        })}
      </main>
    </div>
  );
}

export default App;
