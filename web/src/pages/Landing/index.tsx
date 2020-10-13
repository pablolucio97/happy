import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import logoImg from '../../assets/img/logo.svg'
import './styles.css'
import '../../styles/globals.css'

export default function Landing() {
    return (
        <div id='page-landing'>
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
  
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
  
        <div className="location">
          <strong>João Monlevade</strong>
          <span>Minas Gerais</span>
        </div>
          <Link to='/orphanage' className='enter-app'>
            <FiArrowRight size={26} color='#222'/>
          </Link>
        </div>
      </div>
    )
}
