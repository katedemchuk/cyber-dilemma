import './Clock.css';
import {useState, useEffect} from 'react';
import {MONTHS} from '../../../constants/months';
import {DAYS} from '../../../constants/days';

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(t => new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  const hours = (now.getHours() + '').padStart(2, '0');
  const minutes = (now.getMinutes() + '').padStart(2, '0');

  return (
    <div className='Clock'>{DAYS[day]} {date} {MONTHS[month]} {hours}:{minutes}</div>
  );
}

export default Clock;
