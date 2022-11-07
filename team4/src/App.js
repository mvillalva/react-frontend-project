import React, {useState} from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Router from './Router/Router';
// import LoginPage from './components/login/Login';
import ProfileProvider from './context/profileContext/ProfileContext';


const profiles = [
  {
      id: 1,
      name : 'Usuario 1',
      bg : 'bg-1'
  },
  {
      id: 2,
      name : 'Usuario 2',
      bg : 'bg-2'
  },
  {
      id: 3,
      name : 'Usuario 3',
      bg : 'bg-3'
  },
  {
      id: 4,
      name : 'Usuario 4',
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
  const [titulos, setTitulos] = useState(defaultTitulos());   
  const buscar = (peli) => {
      const api_url = `http://www.omdbapi.com/?i=tt3896198&apikey=9c000cc8&s=${peli}`;

      fetch(api_url)
      .then(data => data.json())
      .then(resultado => {
          // console.log(resultado);  // verificacion de resultados de la busqueda
          const {Search=[]} = resultado;
          setTitulos({
          total: Search.length,
          arreglo: Search,
          busqueda: true,
          });
      })
  }

  return (
    <div className="App netflix-sans-font-loaded overflow-hidden">
      <ProfileProvider>
        <Router profiles={profiles} titulos={titulos}>
          <NavBar buscar={buscar} />
          {/* <LoginPage></LoginPage> // Provisorio    */}
        </Router>
      </ProfileProvider>
    </div>
  );
}

function defaultTitulos(){
  return {
      arreglo: [],
      total: 0,
      busqueda: false
  }
}

export default App;
