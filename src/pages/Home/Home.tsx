import './Home.scss';
import ProductCarousel from './helpers/ProductCarousel';
import ProductsDisplay from './helpers/ProductsDisplay';

const Home = () => {
  return (
    <article className='home'>
      <div className='container'>
        <img
          src='https://m.media-amazon.com/images/I/71LH0z75dSL._SX3000_.jpg'
          alt='Home Image'
          className='home_image'
        />
        <ProductsDisplay />
        <ProductCarousel />
      </div>
    </article>
  );
};

export default Home;
