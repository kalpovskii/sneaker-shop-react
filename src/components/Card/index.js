import styles from "./Card.module.scss";
import React, {useState} from "react";

function Card(props) {
  const [added, setAdded] = useState(false);


  const onClickButton = () => {
    setAdded(!added);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart_unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.image} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
          <img className={styles.plus} onClick={onClickButton} src={added ? "/img/btn_cheked.svg" : "/img/btn_plus.svg"} alt="plus" />
      </div>
    </div>
  );
}

export default Card;
