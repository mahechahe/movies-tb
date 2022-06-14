import './App.css';
import { Nav } from './components/Nav/Nav';
import { Description } from './components/Description/Description';
import { Movies } from './components/Movies/Movies';
import { Context } from './Context/Context';
import { useContextHook } from './Context/useContext';

function App() {

  const provider = useContextHook()

  return (
    <Context.Provider value={provider}>
      <section className='section-container'>
        <div className='div-description-container'>
          <div className='div-absolute-img'></div>
          <Nav></Nav>
          <Description></Description>
        </div>
        <Movies></Movies>
      </section>
    </Context.Provider>
  );
}

export default App;
