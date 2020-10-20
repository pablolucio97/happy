import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import Leaflet from 'leaflet'

import api from '../../services/api'

import marker from '../../assets/img/marker.svg'

import './styles.css'
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
    iconUrl: marker,
    iconSize: [42,42],
    iconAnchor: [21,42]
})

interface OrphangesApi{
    id: number,
    name: string,
    latitude: number,
    longitude: number,

}


export default function OrphanagesMap() {

    const [orphanages, setOrpahanges] = useState<OrphangesApi[]>([])

    useEffect( () => {
        api.get('orphanages').then(response => {
            setOrpahanges(response.data)
            console.log(orphanages)
        })
    }, [])
    
    return (
        <div id='page-map'>
            <aside>
                <header>
                    <img src={marker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>João Monelavade</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

           <Map
            center={[-19.819427,-43.1355571]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
           >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {orphanages.map((orphanage, index) => (
                <Marker 
                key={orphanage.id}
                position={[orphanage.latitude, orphanage.longitude]}
                icon={mapIcon}
                >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                    {orphanage.name}
                   <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight  color='#fff' size={18}/>
                   </Link>
                </Popup>  
                </Marker>
        ))}

            </Map>

            <Link to='/orphanages/create' className='create-orphanage'>
                <FiPlus size={32} color={'#fff'}/>
            </Link>

        </div>
    )
}
