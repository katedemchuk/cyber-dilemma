import './Clock.css';
import {MONTHS} from '../../constants/months';
import {DAYS} from '../../constants/days';

function Clock() {
  const now = new Date();
  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return (
    <div className="Clock">{DAYS[day]} {date} {MONTHS[month]} {hours}:{minutes}</div>
  );
}

export default Clock;
