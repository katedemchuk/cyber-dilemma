import './App.css';
import Greeting from './greeting/Greeting';
import Header from './header/Header';
import Intro from './intro/Intro';
import Start from './start/Start';

function App() {
  const scene = 2;
  return (
    <div className='App'>
      <Header />
      {scene == 0 && <Start />}
      {scene == 1 && <Greeting />}
      {scene == 2 && <Intro />}
    </div>
  );
}

export default App;
