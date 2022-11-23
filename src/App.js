import './App.css';
import Photo from './components/photo/photo';
import { Divider, DividerDown } from './components/divider/divider';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Slider2 from './components/slider/slider2';
import CardModules from './components/cards/cards';

import{
  BrowserRouter as Router,
  // Routes,
  // Route
}from "react-router-dom"

const App = () => (
  <Router>
    <Photo>
      <img src={require('./media/profile.jpeg')} alt=""  />
    </Photo>
    <Divider/>
    <Header
      titulo='David Pacheco'
      logo={require('../src/media/icon.png')} 
    />
    <DividerDown/>
    <Divider
      title = 'Skills'
    />
    <Slider/>
    <DividerDown/>
    <Divider
      title='Education'
    />
    <Slider2/>
    <DividerDown/>
    <Divider
    title='Sobre mi'
  />
  <CardModules.Card>
    <p>
      Soy una persona paciente, con buenas habilidades blandas y técnicas
      adicionalmente me mantengo en contacto con las habilidades y herramientas en
      la vanguardia del desarrollo. Tengo experiencia con proyectos tanto propios como
      académicos en roles Frontend y Backend. Trabajo principalmente en plataformas
      Linux, sin embargo, me desenvuelvo con facilidad en entornos Windows o Mac.
    </p>
  </CardModules.Card>

  {/* <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="" element={<Project/>} />
    <Route path="" element={<Education/>} />
    <Route path="" element={<About/>} />
    <Route path="" element={<Contact/>} />
  </Routes> */}
  </Router>
    
)

export default App;
