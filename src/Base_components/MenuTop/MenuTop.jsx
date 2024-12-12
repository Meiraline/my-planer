
import { NavLink } from 'react-router-dom';
import s from './MenuTop.module.css';

import logo from "./../../logo.png";


function MenuTop() {
  return (

    <div className={s.TopMenu}>
      <div>
        <select name="city" id="city-select">
          
          <option value="http://localhost:3000/profil">-profil-</option>
          <option value="samara">Самара</option>
          
        </select>

        <NavLink to='/main'>  <img className={s.logo} src={logo} alt="logo" />  </NavLink>
        <NavLink to='/profil'>-profil-</NavLink>
        <NavLink to='/planer'>-planer-</NavLink>



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

