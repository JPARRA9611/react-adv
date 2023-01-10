import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { Props, ProductContextProps } from '../interfaces/Products';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({children, product}:Props) => {
  const { amount, increaseBy } = useProduct();
  return (
    <Provider value={{ amount, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}