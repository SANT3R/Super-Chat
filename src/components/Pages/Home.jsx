import React from 'react';
import imgPerfil from '../images/img_perfil.png';
import { ListaChats } from '../Layouts/ListaChats';
import './css/Home.css'

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
          <img src={imgPerfil} alt='img-perfil' className='imgPerfil'></img>
        </div>
      </header>
      <main>
        <section className='listaChats'>
          <ListaChats />
          <ListaChats />
          <ListaChats />
        </section>
        <section className='campo-Chat'>

        </section>
      </main>
    </div>
  )
}
