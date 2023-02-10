import StyledText from '../text-utils/StyledText';
import './Greeting.css';

function Greeting() {
  return (
    <div className='Greeting'>
      <p>
        Hi, stranger
        <br></br>
        <br></br>
        Today you're a different person
        <br></br>
        Your name is <StyledText color='accent'>cyb3r_punk01</StyledText>
      </p>

      <div className='ascii'>
        <pre>            _      _____                         _    _____  __  </pre>
        <pre>           | |    |____ |                       | |  |  _  |/  | </pre>
        <pre>  ___ _   _| |__      / /_ __  _ __  _   _ _ __ | | _| |/` |`| | </pre>
        <pre> / __| | | | `_ \     \ \ `__|| `_ \| | | | `_ \| |/ /  /| | | | </pre>
        <pre>| (__| |_| | |_) |.___/ / |   | |_| | |_| | | | |    \ |_/ /_| |_</pre>
        <pre> \___|\__, |_.__/ \____/|_|   | .__/ \__,_|_| |_|_|\_\\___/ \___/</pre>
        <pre>       __/ |            ______| |                                </pre>
        <pre>      |___/            |______|_|                                </pre>
      </div>

      <a>Press SPACE to start</a>
    </div>
  )
}

export default Greeting;
