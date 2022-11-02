import './App.css';
import Photo from './components/photo/photo';

function App() {
  return (
    <Photo>
        <img src={require('./media/profile.jpeg')} alt=""  />
    </Photo>
  );
}

export default App;
