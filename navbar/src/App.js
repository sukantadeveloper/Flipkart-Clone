
import './App.css';
import Navbar from './components/navbar';
import Mobile from './components/mobile';
import {Categories} from "./components/Categries"

function App() {
  return (
    <div className="App">
      
    <Navbar/>
    
      
     <Categories/>
    </div>
  );
}

export default App;