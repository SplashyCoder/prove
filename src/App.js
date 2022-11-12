import './App.css';
import Photo from './components/photo/photo';
import { Divider, DividerDown } from './components/divider/divider';
import Header from './components/header/header';
import Slider from './components/slider/slider';

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
      title = 'habilidades'
    />
    <Slider/>
    <DividerDown/>

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
