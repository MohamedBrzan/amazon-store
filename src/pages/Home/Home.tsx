import { products } from '../../data/data.json';
import Product from '../../interfaces/Product';
import ProductSection from '../../types/Section';

import './Home.scss';

const Home = () => {
  return (
    <article className='home'>
      <div className='container'>
        <img
          src='https://m.media-amazon.com/images/I/71LH0z75dSL._SX3000_.jpg'
          alt='Home Image'
          className='home_image'
        />
        <div className='products'>
          {products.map(({ title, sections }: Product, idx) => (
            <div className='card' key={idx}>
              <h2 className='head_title'>{title}</h2>
              <div className='sections'>
                {sections.map(({ image, title }: ProductSection, idx) => (
                  <div className='section' key={idx}>
                    <img src={image} alt={title} />
                    <p className='section_title'>
                      {' '}
                      <small>{title}</small>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Home;
