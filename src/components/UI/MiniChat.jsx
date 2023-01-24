import React from 'react';
import imgPerfil from '../images/img_perfil.png';

export const MiniChat = ({ Nombre, Fecha, Mensaje }) => {
  return (
    <div className='miniChat'>
        <div className='parte1'>
          <img src={imgPerfil} alt='imagen de perfil' className='imgPerfil' />
        </div>
        <div className='parte2'>
          <h4>{Nombre}</h4>
          <h5>{Mensaje}</h5>
        </div>
        <div className='parte3'>
          <h5>{Fecha}</h5>
        </div>
    </div>
  )
}
