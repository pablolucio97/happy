import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'

import marker from '../../assets/img/marker.svg'

import './styles.css'
import 'leaflet/dist/leaflet.css';


export default function Orphanage() {
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
            center={[-19.8266551,-43.1262581]}
            zoom={13}
            style={{width: '100%', height: '100%'}}
           >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to='/' className='create-orphanage'>
                <FiPlus size={32} color={'#fff'}/>
            </Link>

        </div>
    )
}
