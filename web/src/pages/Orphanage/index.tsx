import React, {useState, useEffect} from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory, useParams } from 'react-router-dom';
import L from 'leaflet';

import api from '../../services/api'

import mapMarkerImg from '../../assets/img/marker.svg'

import './styles.css'

import Sidebar from "../../components/Sidebar";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})


interface OrphanagesApi{
  name: string,
  latitude: number,
  longitude: number,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: boolean,
  images: {
    path: string,
    id: number
  }[]

}

interface OrphanageParams{
  id: string,

}





export default function Orphanage() {
  
  const { goBack } = useHistory();
  
  const [orphanage, setOrphanage] = useState<OrphanagesApi>()
  const [activeIndex, setActiveIndex] = useState(0)

  const params = useParams<OrphanageParams>()

  useEffect( () => {
    api.get(`orphanages/${params.id}`).then(response => {
        setOrphanage(response.data) 
    })
}, [params.id])





  return (
    <div id="page-orphanage">
      <Sidebar/>
        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
        

      <main>
        <div className="orphanage-details">
          <img src={orphanage?.images[activeIndex].path} alt="Lar das meninas" />

          <div className="images">
            {orphanage?.images.map((image, index) => {
              return (
                <button key={image.id} className={activeIndex === index? 'active' : ''} type='button'
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                >
                  <img src={image.path} alt={orphanage.name}/>
                </button>
              )
            })}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage?.name}</h1>
            <p>{orphanage?.about}</p>

            <div className="map-container">
              <Map 
                center={[-27.2092052,-49.6401092]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
              </Map>

              <footer>
                <a  target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage?.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage?.opening_hours}
              </div>
              {orphanage?.open_on_weekends? 
              (  
                <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
              )

              :

              (
              <div className="not-open-on-weekends">
                <FiInfo size={32} color="#FF669D" />
                Não atendemos <br />
                fim de semana
              </div>
              ) }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}