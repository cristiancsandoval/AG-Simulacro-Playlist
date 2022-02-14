import React, {useState} from 'react';
import axios from 'axios';
import { endpoint } from '../helpers/url';

const Agregar = () => {

    const [nueva, setNueva] = useState({
        "cancion": "",
        "artista": "",
        "genero": "",
        "frame": ""
    })

    const {cancion, artista, genero, frame} = nueva;

    const postData = () => {
        axios.post(endpoint,nueva)
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
   }

   const handleChanged = ({target}) => {
    setNueva({
      ...nueva,
      [target.name]: target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
   }

    return (
        <div>
            <h2>Agregar canción</h2>
            <form onSubmit={handleSubmit}>
                <div>
                   <label>Cancion</label>
                   <input id="inputNombre" name="cancion" value={cancion} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Artista</label>
                   <input id="inputNombre" name="artista" value={artista} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Género</label>
                   <input id="inputNombre" name="genero" value={genero} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Link de Spotify</label>
                   <input id="inputNombre" name="frame" value={frame} onChange={handleChanged}/>
               </div>
               <div>
                   <button onClick={() => postData()} >Agregar canción</button> 
               </div>
            </form>
        </div>
    )
    
}

export default Agregar