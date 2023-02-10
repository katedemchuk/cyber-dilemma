import './Header.css';
import Clock from './clock/Clock';
import Indicator from './indicator/Indicator';

function Header() {
  return (
    <div className='Header'>
      {/* <Indicator title='Sleep' charge='3' />
      <Indicator title='Coffee' /> */}
      <Clock />
    </div>
  )
}

export default Header;
