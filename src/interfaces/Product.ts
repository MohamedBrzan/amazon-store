import ProductSection from '../types/Section';

interface Product {
  id: string | number;
  title: string;
  sections: ProductSection[];
  deal?: {
    label: string;
    message: string;
  };
}

export default Product;
