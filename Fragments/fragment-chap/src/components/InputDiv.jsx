import styles from './InputDiv.module.css'

const InputDiv = () => {
    
    return (
    <input className={styles.inputDv} type="text" placeholder="Enter ur suggestion" onChange={(event) => console.log(event)}/>

    )
}

export default InputDiv;