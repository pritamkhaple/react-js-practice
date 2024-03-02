import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({onButtonClick}) => {
  const ButtnNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "X",
    "/",
    "-",
    "+",
    "%",
    "=",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonsContainer}>
        {ButtnNames.map((buttonName) => (
          <button className={styles.buttn} onClick={() => onButtonClick(buttonName)} >{buttonName}</button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
