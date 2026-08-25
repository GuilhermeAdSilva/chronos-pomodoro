import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    <>
      {' '}
      {/* react fragment */}
      <Heading attr={123}>Olá mundo 1</Heading>
      <Heading>Olá mundo 2</Heading>
      <Heading>Olá mundo 3</Heading>
      <Heading>Olá mundo 4</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eius
        cupiditate accusantium. Omnis eum iste corporis nam. Ab aut, inventore
        quia nulla minima eos, reiciendis praesentium nesciunt ea saepe odio.
      </p>
    </>
  );
}
