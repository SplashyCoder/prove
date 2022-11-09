import './App.css';
import Photo from './components/photo/photo';
import { Divider, DividerDown } from './components/divider/divider';

const App = () => (
  <>
    <Photo>
      <img src={require('./media/profile.jpeg')} alt=""  />
    </Photo>
    <Divider/>
  </>
)

export default App;
