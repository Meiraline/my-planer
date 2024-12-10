
import { NavLink } from 'react-router-dom';
import s from './MenuTop.module.css'


function MenuTop(){
    return(
      
      <div className={s.TopMenu}>
        <div>
          <NavLink to ='/main'>-logo-</NavLink>
          <NavLink to ='/profil'>-profil-</NavLink>
          <NavLink to ='/planer'>-planer-</NavLink> 

          
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

  
  export default MenuTop;
  
