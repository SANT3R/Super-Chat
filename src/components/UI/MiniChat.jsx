import React from 'react';
import imgPerfil from '../images/img_perfil.png';
import './css/MiniChat.css'

export const MiniChat = ({ Nombre, Fecha, Mensaje }) => {
  return (
    <div className='miniChat'>
        <img src={imgPerfil} alt='imagen de perfil' className='imgPerfil' />
        <div className='txt-miniChat'>
          <div className='parte1'>
            <h4>{Nombre}</h4>
            <h5>{Fecha}</h5>
          </div>
          <div className='parte2'>
            <h5>{Mensaje}</h5>
          </div>
        </div>
    </div>
  )
}
