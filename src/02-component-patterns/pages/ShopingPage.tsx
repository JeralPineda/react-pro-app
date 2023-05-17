import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Cofee Mug - Card',
  img: './coffee-mug.png',
};

export const ShopingPage = () => {
  return (
    <div>
      <h1>ShopingPage</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />

          <ProductCard.Title title="Hola Mundo" />

          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />

          <ProductTitle className="text-white text-bold" />

          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
