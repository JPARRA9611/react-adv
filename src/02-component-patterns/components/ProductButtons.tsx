import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButtons = () : JSX.Element => {
  const { amount, increaseBy } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
      <label className={styles.countLabel}>{ amount }</label>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
    </div>
  )
}