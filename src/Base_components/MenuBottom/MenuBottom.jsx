
import classes from './MenuBottom.module.css'




function MenuBottom(){
    return(
      <div className={classes.MenuBottom}>
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
  
  export default MenuBottom;