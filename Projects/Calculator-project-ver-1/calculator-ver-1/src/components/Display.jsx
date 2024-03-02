import styles from "../App.module.css";
import style from "./Display.module.css"



const Display = ({displaylValue}) => {
    return(
        <input className={style.display} type="text" value={displaylValue} readOnly/>
    )
}

export default Display;