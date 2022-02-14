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
       .then(response => {
        console.log(response.data);
        alert("Canción agregada")
       }
        )
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
        <main>
            <h2>Agregar canción</h2>
            <form onSubmit={handleSubmit}>
                <div className="formElemento">
                   <label>Cancion</label>
                   <input id="inputNombre" name="cancion" value={cancion} onChange={handleChanged}/>
               </div>
               <div className="formElemento">
                   <label>Artista</label>
                   <input id="inputNombre" name="artista" value={artista} onChange={handleChanged}/>
               </div>
               <div className="formElemento">
                   <label>Género</label>
                   <input id="inputNombre" name="genero" value={genero} onChange={handleChanged}/>
               </div>
               <div className="formElemento">
                   <label>Link de Spotify</label>
                   <input id="inputNombre" name="frame" value={frame} onChange={handleChanged}/>
               </div>
               <div className="formElemento">
                   <button onClick={() => postData()} >Agregar canción</button> 
               </div>
            </form>
            <div className="cntrCancion">
                <div className='infoCancion'>
                    <h4>{cancion} </h4>
                    <p> <span>{artista}</span> {genero} </p>
                </div>
                <div className='frameCancion'>
                    <iframe src={frame} name={cancion}></iframe>
                </div>
            </div>               
        </main>
    )
    
}

export default Agregar