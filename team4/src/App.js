import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Router from "./Router/Router";
import { fbCreateOrGetDocument } from "./functions/firebaseActions";
import { buscar, defaultTitulos } from "./functions/movieApi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebase/firebaseConfig";
import { MainContext } from "./context/MainContext";
import { TYPE } from "./functions/general";

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
  "/player/movie/:id",
  "/player/tv/:id",
  "/",
];

function App() {
  const [isScrolled, setScrolled] = useState(false);
  const [titulos, setTitulos] = useState(defaultTitulos());  
  
  const { profiles, user, changeState} = useContext(MainContext)

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase && userFirebase !== user) {
        changeState(TYPE.user, userFirebase ? userFirebase : null);
    }
  });

  useEffect(() => {
    if (user) {
        const getProfiles = async () => {
        let data = await fbCreateOrGetDocument("users", user.email);

        changeState(TYPE.profiles, data);        
      };

      getProfiles();
    } else {
      if (profiles.length > 0) {
        console.log('entro')
        changeState(TYPE.profiles, []);        
        localStorage.removeItem("appState");
      }
    }
    // eslint-disable-next-line
  }, [user]);

  const movies = [{ id: 1 }, { id: 2 }];

  const profilesLoaded = profiles.length > 0;
  
  return (
    <div className="App netflix-sans-font-loaded overflow-hidden general">  
        <Router
            titulos={titulos}
            movies={movies}
            loggedUser={user ? user.email : null}
            profilesLoaded={profilesLoaded}
        >
            {profiles.length > 0 && user && (
            <NavBar
                isScrolled={isScrolled}
                filter={sinNavBar}
                buscar={{ buscar, setTitulos }}
            ></NavBar>
            )}
        </Router>      
    </div>
  );
}

export default App;
