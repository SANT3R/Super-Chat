import './App.css';
import imgPerfil from './images/img_perfil.png';

function App() {
  return (
    <div className="App">
      <header>
        <div className='filtros comun-nav'>
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
        </div>
        <div className='buscador comun-nav'>
          <input placeholder="Buscar" />
        </div>
        <div className='miChat comun-nav'>
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
