import React from 'react';
import './css/VerChat.css'
import imgPerfil from '../images/img_perfil.png';

export const VerChat = () => {
  return (
    <>
      <article className='personaChat'>
        <img src={imgPerfil} alt='img-perfil' className='imgPerfil' />
        <h3>Nombre</h3>
        <h4>Estado</h4>
      </article>
      <article className='panelMsj'>
        <h5>Fecha</h5>
        <div className='msjIzq'>
          <p id='izq'>Mensaje</p>
        </div>
        <div className='msjDer'>
          <p id='der'>Mensaje 1</p>
        </div>
      </article>
      <article className='campoEscritura'>
        <input placeholder='Escribe tu mensaje' />
        <div className='msj-iconos'>iconos</div>
      </article>
    </>
  )
}
