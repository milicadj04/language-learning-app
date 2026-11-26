import { useEffect, useState } from 'react';

function App() {
  const [poruka, setPoruka] = useState('Učitavam...');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => setPoruka(data.message))
      .catch(() => setPoruka('Server nije dostupan'));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Platforma za učenje jezika</h1>
      <p>Odgovor servera: {poruka}</p>
    </div>
  );
}

export default App;