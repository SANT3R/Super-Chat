import React from 'react';
import { MiniChat } from '../UI/MiniChat';
import './css/ListaChats.css';

export const ListaChats = () => {
  return (
    <article className='grupoChats'>
      <h3>Titulo</h3>
      <MiniChat Nombre='Tilin' Fecha='Ayer' Mensaje='Eso tilin' />
      <MiniChat Nombre='Susana Oria' Fecha='Ayer' Mensaje='Pablito clavo un clavito' />
      <MiniChat Nombre='Susana Oria' Fecha='Ayer' Mensaje='Pablito clavo un clavito' />
      <MiniChat Nombre='Susana Oria' Fecha='Ayer' Mensaje='Pablito clavo un clavito' />
      <MiniChat Nombre='Susana Oria' Fecha='Ayer' Mensaje='Pablito clavo un clavito' />
      <MiniChat Nombre='Susana Oria' Fecha='Ayer' Mensaje='Pablito clavo un clavito' />
    </article>
  )
}
