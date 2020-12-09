import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorChangeButton from './colorChangeButton';

function App() {
  const [color, setColor] = useState('');
  const colors = ['red', 'blue', 'yellow'];

  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColorChangeButton colors={colors} setColors={setColor}/>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
