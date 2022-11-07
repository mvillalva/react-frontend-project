import './App.css';
import NavBar from './components/navBar/NavBar';
import Router from './Router/Router';


const profiles = [
  {
      id: 1,
      name : 'User 1',
      bg : 'bg-1'
  },
  {
      id: 2,
      name : 'User 2',
      bg : 'bg-2'
  },
  {
      id: 3,
      name : 'User 3',
      bg : 'bg-3'
  },
  {
      id: 4,
      name : 'User 4',
      bg : 'bg-4'
  },
//   {
//       id: 5,
//       name : 'User 5',
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
        <Router profiles={profiles}>
          <NavBar></NavBar>
          
          
        </Router>
        
    </div>
  );
}

export default App;
