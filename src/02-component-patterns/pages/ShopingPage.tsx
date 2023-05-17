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

const product2 = {
  id: '2',
  title: 'Cofee Mug - Meme',
  img: './coffee-mug2.png',
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />

          <ProductCard.Title title="Hola Mundo" className="text-bold" />

          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product2} className="bg-dark text-white">
          <ProductImage
            className="custom-image"
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />

          <ProductTitle className="text-bold" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
