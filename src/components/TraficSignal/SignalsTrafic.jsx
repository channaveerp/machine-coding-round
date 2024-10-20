import { useEffect, useState } from 'react';
// import './styles.css';

const lights = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
};
export default function SignalsTrafic() {
  // to know active state
  const [active, setActive] = useState(lights.red);

  useEffect(() => {
    if (active == 'red') {
      setTimeout(() => {
        setActive(lights.green);
      }, 2000);
    }
    if (active === 'green') {
      setTimeout(() => {
        setActive(lights.yellow);
      }, 2000);
    }
    if (active === 'yellow') {
      setTimeout(() => {
        setActive(lights.red);
      }, 2000);
    }
  }, [active]);
  console.log('acive', active);

  return (
    <div className='App'>
      <div className='wrapper'>
        <div
          className='light red'
          style={{
            opacity: active !== lights.red ? 0.5 : null,
          }}>
          A
        </div>
        <div
          className='light green'
          style={{
            opacity: active !== lights.green ? 0.5 : null,
          }}>
          {' '}
          B
        </div>
        <div
          className='light yellow'
          style={{
            opacity: active !== lights.yellow ? 0.5 : null,
          }}>
          C
        </div>
      </div>
    </div>
  );
}
