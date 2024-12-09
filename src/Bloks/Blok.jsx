import s from "./Blok.module.css"



function Blok(p) {
    return (
        <div className={s.Blok}>
            {p.filling}
        </div>
    );
    
}


export default Blok;
