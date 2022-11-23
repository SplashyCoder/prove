import './App.css';
import Photo from './components/photo/photo';
import { Divider, DividerDown } from './components/divider/divider';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Slider2 from './components/slider/slider2';
import CardModules from './components/cards/cards';
import Contact from './contact/contact';
import Footer from './components/footer/footer';

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
    <p className='description'>
    I’m a pacient person, with good soft and technical skills, futher I hold up in touch
    with the tools and skills in the development vanguard. I have experience in
    personal and academic projects in Frontend and Backend roles. Actually work in
    Linux platforms, however, I unwrap easily in Windows and Mac enviroments.
    </p>
  </CardModules.Card>
  <Divider
    title='Contact'
  />  
    <Contact/>
  <DividerDown/>
  <Footer></Footer>
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
