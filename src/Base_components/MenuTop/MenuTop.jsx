
import s from './MenuTop.module.css'


function MenuTop(){
    return(
      
      <div className={s.TopMenu}>
        <div>
          <a href='/main'>-logo-</a>
          <a href='/profil'>-profil-</a>
          <a href='/planer'>-planer-</a> 

          
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
  
