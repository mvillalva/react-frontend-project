import React from 'react'
import './Playlist.css'

const Playlist = (props) => {

  const myList = props.data.map((element) => {
    return (<div className="card p-2"> <img src={element.posterUrl} alt={element.title} width={200} /></div>)
  });

  return (
    <div>
      <h1>Mi lista</h1>
      <div className="playlist d-flex flex-row flex-wrap gap-4">

        {myList}
      </div>
    </div>
  )
}


export default Playlist