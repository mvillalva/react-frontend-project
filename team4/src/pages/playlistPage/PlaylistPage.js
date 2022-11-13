import React from "react";
import './PlaylistPage.css';
import Playlist from "../../components/playlist/Playlist";
import Footer from "../../components/footer/Footer";

const movieData = [
    {
        "id": 1,
        "title": "The Cotton Club",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    },
  
    {
        "id": 2,
        "title": "Crocodile Dundee",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
        "id": 3,
        "title": "Ratatouille",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    },
    {
        "id": 4,
        "title": "City of God",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
    },
    {
        "id": 5,
        "title": "Stardust",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
    }
  ];

const PlaylistPage = () => {
    

     return (        
          <div className="playlist-page-container">
              <div className="centered-div animate-container">
               <Playlist data={movieData} />
               <Footer></Footer>
              </div>
          </div>
      )
 }
  
 export default PlaylistPage