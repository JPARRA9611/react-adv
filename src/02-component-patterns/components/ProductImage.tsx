import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({img = ''}) : JSX.Element => {
  const { product } = useContext(ProductContext);
  let imgShow = img;
  if(!imgShow){
    imgShow = product.img || ''
  }

  return (<img className={styles.productImg} src={imgShow ? imgShow : noImage} alt='Product' />)
}