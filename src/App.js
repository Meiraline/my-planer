//import logo from './logo.png';

import { BrowserRouter } from 'react-router-dom';

import './App.css';
import MenuTop from './Base_components/MenuTop/MenuTop.jsx';
import PageHome from './Base_components/BlokHome/PageHome.jsx';
import MenuBottom from './Base_components/MenuBottom/MenuBottom.jsx';





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
