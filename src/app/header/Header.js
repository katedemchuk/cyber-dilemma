import './Header.css';
import Clock from './clock/Clock';
import Indicator from './indicator/Indicator';
import BackgroundAudio from '../background-audio/BackgroundAudio';

function Header() {
  return (
    <div className='Header'>
      {/* <Indicator title='Sleep' charge='3' />
      <Indicator title='Coffee' /> */}
      <BackgroundAudio />
      <Clock />
    </div>
  )
}

export default Header;
