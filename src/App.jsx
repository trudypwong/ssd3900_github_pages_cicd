import { useState } from 'react';
import './App.css';

function App() {
  const [colour, setColour] = useState('');

  return (
    <>
      <h1>Docker + GitHub Actions </h1>
      <p>SSD3900 DevOps and Containerization</p>
      <div className="container" style={{ borderColor: colour }}>
        <p>Trying out input type='color'</p>
        <div className="row">
          <label for="colour">Colour</label>
          <input
            id="colour"
            name="colour"
            type="color"
            onChange={(e) => setColour(e.target.value)}
            value={colour}
          />
          <p style={{ color: colour }}>{colour}</p>
        </div>
      </div>
    </>
  );
}

export default App;
