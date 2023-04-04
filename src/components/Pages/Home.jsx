import React from 'react';
import './css/Home.css'
import imgPerfil from '../images/img_perfil.png';
import { ListaChats } from '../Layouts/ListaChats';
import { VerChat } from '../Layouts/VerChat';

export const Home = () => {
  return (
    <div>
      <header>
        <div className='filtros comun-nav'>
          <select>
            <option value='Todos' >Todos</option>
            <option value='Familia'>Familia</option>
            <option value='Trabajo'>Trabajo</option>
            <option value='Amigos'>Amigos</option>
          </select>
          <select>
            <option value='Recientes'>Recientes</option>
            <option value='Nuevos'>Nuevos</option>
            <option value='Nuevos'>Sin leer</option>
          </select>
        </div>
        <div className='buscador comun-nav'>
          <input placeholder='Buscar' />
        </div>
        <div className='miChat comun-nav'>
          <h4>Mi Nombre</h4>
          <img src={imgPerfil} alt='img-perfil' className='imgPerfil' />
        </div>
      </header>
      <main>
        <section className='listaChats'>
          <ListaChats />
          <ListaChats />
          <ListaChats />
          <ListaChats />
        </section>
        <section className='campo-Chat'>
          <VerChat />
        </section>
      </main>
    </div>
  )
}
