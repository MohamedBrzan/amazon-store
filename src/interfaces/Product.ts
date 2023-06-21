type Section = {
  image: string;
  title: string;
};

interface Product {
  title: string;
  sections: Section[];
  deal?: {
    label: string;
    message: string;
  };
  
}

export default Product;
