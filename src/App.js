import logo from './logo.svg';
import './App.css';
import MenuTop from './Base_components/MenuTop/MenuTop';
import BlokHome from './Base_components/BlokHome/BlokHome';
import MenuBottom from './Base_components/MenuBottom/MenuBottom';





function App() {
  return (
    <div className="App">

      <MenuTop />
      <BlokHome />
      <MenuBottom/>

    </div>
  );
}


export default App;
