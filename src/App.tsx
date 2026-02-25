import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Cyrillic Quiz 🇷🇺</h1>
        <p className="subtitle">Transliterate the Cyrillic word into Latin letters</p>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
