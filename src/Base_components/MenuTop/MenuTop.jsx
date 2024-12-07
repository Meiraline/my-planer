import classes from './MenuTop.module.css'


function MenuTop(){
    return(
      
      <div className={classes.TopMenu}>
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

  
  export default MenuTop;
  
