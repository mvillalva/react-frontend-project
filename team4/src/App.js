import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Router from './Router/Router';
import ProfileProvider from './context/profileContext/ProfileContext';
import { getProfilesData } from './functions/firebaseActions';
import { buscar, defaultTitulos } from './functions/movieApi';

const sinNavBar = ['/login', '/start', '/start?', '/profiles', '/ManageProfiles', '/EditProfile', '/DeleteProfile', '/AddProfile', '/ProfileAvatars', '/notfound']

function App() {    
    const [titulos, setTitulos] = useState(defaultTitulos());    
    const [profiles, setProfiles] = useState([])
        
    useEffect(() => {
        const getProfiles = async () => {
            let data = await getProfilesData('users')
            setProfiles(data)
        }

        getProfiles()

    }, [])

    return (
        <div className="App netflix-sans-font-loaded overflow-hidden">
            <ProfileProvider>
                <Router profiles={profiles} titulos={titulos}>
                    <NavBar filter={sinNavBar} buscar={{buscar, setTitulos}} profiles={profiles}></NavBar>
                </Router>
            </ProfileProvider>
        </div>
    );
}

export default App;
