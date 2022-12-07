import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Router from "./Router/Router";
import { fbCreateOrGetDocument } from "./functions/firebaseActions";
import { buscar, defaultTitulos } from "./functions/movieApi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebase/firebaseConfig";
import MainProvider, { SetContextSate } from "./context/MainContext";

const auth = getAuth(firebaseApp);

const sinNavBar = [
  "/login",
  "/start",
  "/profiles",
  "/ManageProfiles",
  "/EditProfile/:id",
  "/DeleteProfile/:id",
  "/AddProfile",
  "/ProfileAvatars",
  "/notfound",
  "/front",
  "/registration",
  "/",
];

function App() {
  const [isScrolled, setScrolled] = useState(false)
  const [titulos, setTitulos] = useState(defaultTitulos());
  const [profiles, setProfiles] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase && userFirebase !== loggedUser) {      
      setLoggedUser(userFirebase? userFirebase : null )      
    }
  });
  
  useEffect(() => {    
    if (loggedUser) {
      const getProfiles = async () => {
        let data = await fbCreateOrGetDocument("users", loggedUser.email);
                
        setProfiles(data);
        localStorage.setItem('login', loggedUser.email)        
        SetContextSate('PS', data)
      };

      getProfiles();
    } else {      
      if (profiles.length > 0) {
        setProfiles([])
        SetContextSate('PS', [])        
        localStorage.removeItem('appState')
      }
    }
  // eslint-disable-next-line    
  }, [loggedUser]);

  const movies = [{id:1},{id:2}]

  const profilesLoaded = profiles.length > 0
  
  return (
    <div className="App netflix-sans-font-loaded overflow-hidden general">
      <MainProvider>
        <Router titulos={titulos} movies={movies} loggedUser={loggedUser? loggedUser.email: null} profilesLoaded={profilesLoaded}>
        {profiles.length > 0 && loggedUser &&
          <NavBar
            isScrolled={isScrolled}
            filter={sinNavBar}
            buscar={{ buscar, setTitulos }}
          ></NavBar>
          }          
        </Router>
      </MainProvider>
    </div>
  );
}

export default App;
