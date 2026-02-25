import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Cyrillic Program for Simon</h1>
        <p className="subtitle">
          Guess or write the Cyrillic word into Latin letters
        </p>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
