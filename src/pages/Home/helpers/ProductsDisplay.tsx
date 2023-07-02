import { Link } from 'react-router-dom';
import { products } from '../../../data/data.json';
import Product from '../../../interfaces/Product';
import ProductSection from '../../../types/Section';

const ProductsDisplay = () => {
  return (
    <div className='products'>
      {products.map(({ title, sections, link }: Product, idx) => (
        <div className='card' key={idx}>
          <h2 className='head_title'>{title}</h2>
          <div className='sections'>
            {sections.length > 1
              ? sections.map(({ image, title }: ProductSection, idx) => (
                  <div className='section' key={idx}>
                    <img src={image} alt={title} />
                    <p className='section_title'>
                      <small>{title}</small>
                    </p>
                  </div>
                ))
              : sections.map(({ image, title }: ProductSection, idx) => (
                  <div className='section alone' key={idx}>
                    <img src={image} alt={title} />
                  </div>
                ))}
          </div>
          <Link to='/' className='product_link'>
            <small>{link}</small>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
