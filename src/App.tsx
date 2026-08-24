import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    <>
      {' '}
      {/* react fragment */}
      <Heading />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eius
        cupiditate accusantium. Omnis eum iste corporis nam. Ab aut, inventore
        quia nulla minima eos, reiciendis praesentium nesciunt ea saepe odio.
      </p>
    </>
  );
}
