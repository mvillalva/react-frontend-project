import './App.css';
import Router from './Router/Router';

const profiles = [
  {
      id: 1,
      name : 'Marce',
      bg : 'bg-1'
  },
  {
      id: 2,
      name : 'Agus',
      bg : 'bg-2'
  },
  {
      id: 3,
      name : 'Cari',
      bg : 'bg-3'
  },
  {
      id: 4,
      name : 'Tati',
      bg : 'bg-4'
  },
//   {
//       id: 5,
//       name : 'Nuevo usuario',
//       bg : 'bg-5'
//   },
  {
      id: 6,
      name : 'Agregar perfil',
      bg : ''
  }
]

function App() {
  return (
    <div className="App netflix-sans-font-loaded">
        <Router profiles={profiles}></Router>
    </div>
  );
}

export default App;
