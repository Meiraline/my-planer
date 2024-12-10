//import logo from './logo.png';

import { BrowserRouter } from 'react-router-dom';

import './App.css';
import MenuTop from './Base_components/MenuTop/MenuTop';
import PageHome from './Base_components/BlokHome/PageHome';
import MenuBottom from './Base_components/MenuBottom/MenuBottom';



function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <MenuTop />
        <PageHome />
        <MenuBottom />
      </div>
    </BrowserRouter>
  );
  
}


export default App;
