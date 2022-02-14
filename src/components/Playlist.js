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
        <div>
            {
                canciones.map(can =>(
                    <div key={can.id}>
                        <div>
                            <h4>{can.cancion}</h4>
                            <p>
                                <span>{can.artista}</span>
                                <span>{can.genero}</span>
                            </p>
                        </div>
                        <div>
                            <iframe src={can.frame} ></iframe>
                        </div>
                        <button onClick={() => borrarCancion(can.id)}>Eliminar</button>
                    </div>
                ))
            }
        </div>
    )
}