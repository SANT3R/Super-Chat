import './App.css';
import imgPerfil from './images/img_perfil.png';

function App() {
  return (
    <div className="App">
      <header>
        <div className='filtros'>
          <select>
            <option value="Todos" >Todos</option>
            <option value="Familia">Familia</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Amigos">Amigos</option>
          </select>
          <select>
            <option value="Recientes">Recientes</option>
            <option value="Nuevos">Nuevos</option>
          </select>
          <input placeholder="Buscar" />
          <h4>Mensaje</h4>
        </div>
        <div className='miChat'>
          <img src={imgPerfil} alt="img-perfil"></img>
          <h4>Mi Nombre</h4>
        </div>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
