import './App.css';
import Greeting from './greeting/Greeting';
import Header from './header/Header';
import Start from './start/Start';

function App() {
  const scene = 0;
  return (
    <div className='App'>
      <Header />
      {scene == 0 && <Start />}
      {scene == 1 && <Greeting />}
    </div>
  );
}

export default App;
