import './App.css';
import Clock from './clock/Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>

      <h1>Cyber dilemma</h1>

      <p>
        Live a day of a <span class="text-accent">cyber hacker's life</span> and face a <span class="text-danger">challenge</span>. You will be required to make multiple decisions which will determine a game ending. <span class="text-idea">Each decision affects where you finish your path.</span>
      </p>

      <a>Press SPACE to start</a>
    </div>
  );
}

export default App;
