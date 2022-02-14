import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { endpoint } from '../helpers/url';

export const Playlist = () => {

    const [canciones, setCanciones] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(endpoint)
        .then(response => {
            setCanciones(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    const borrarCancion = (id) => {
        axios.delete(endpoint+id)
        .then(response => {
            getData();
          console.log(response.data)
       })
       .catch(error => {
           console.log(error);
       })
   }

    return(
        <main>
            <h2>Lista de canciones</h2>
            {
                canciones.map(can =>(
                    <div key={can.id} className="cntrCancion">
                        <div className='infoCancion'>
                            <h4>{can.cancion} </h4>
                            <p> <span>{can.artista}</span> {can.genero} </p>
                            <button onClick={() => borrarCancion(can.id)}>Eliminar</button>
                        </div>
                        <div className='frameCancion'>
                            <iframe src={can.frame} name={can.cancion}></iframe>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}