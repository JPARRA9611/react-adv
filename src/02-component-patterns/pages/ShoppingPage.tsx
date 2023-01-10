import { ProductCard } from '../components';
import { Product } from '../interfaces/Products';

const products: Product[] = [
  {
    id: '1',
    title:'Coffe Mug',
  },
  {
    id:'2',
    title:'Coffe Mug Img',
    img:'./coffee-mug.png'
  }
]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap'
      }}>
        {products.map(product => (
          <ProductCard product={product} >
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
