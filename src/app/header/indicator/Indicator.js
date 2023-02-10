import './Indicator.css';

function Indicator({title, capacity = 5, charge = 5}) {
  const ticks = [];
  let empty = capacity - charge;

  while (empty > 0) {
    empty--
    ticks.push(<li className='empty'></li>)
  }

  while (charge > 0) {
    charge--
    ticks.push(<li></li>)
  }

  return (
    <div className='Indicator'>
      {title && <h3>{title}</h3>}
      <ul>{ticks}</ul>
    </div>
  );
}

export default Indicator;
