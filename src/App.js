import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">

    <TopMenu></TopMenu>
    <BlokHome></BlokHome>
    <MenuBottom></MenuBottom>
    
    </div>
  );
}

function TopMenu(){
  return(
    
    <div className='TopMenu'>
      <div>
        <a>-logo-</a>
        <a>-this page-</a>
      </div>
      
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  )
}

function MenuBottom(){
  return(
    <div className='MenuBottom'>
      <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
   <div>
    <button>+</button>
    </div>
    
    </div>
  )
}

function BlokHome(){
  return(
    <div className='BlokHome'>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
      <Blok></Blok>
    </div>
  )
}



// базовые блоки

function Blok(){
  return(
    <div className='Blok'></div>
  );
}

export default App;
