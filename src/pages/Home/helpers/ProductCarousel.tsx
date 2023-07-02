import { useRef, MutableRefObject, useState } from 'react';
import c1 from '../../../assets/images/carousel/c1.jpg';
import c2 from '../../../assets/images/carousel/c2.jpg';
import c3 from '../../../assets/images/carousel/c3.jpg';
import c4 from '../../../assets/images/carousel/c4.jpg';
import c5 from '../../../assets/images/carousel/c5.jpg';
import c6 from '../../../assets/images/carousel/c6.jpg';
import c7 from '../../../assets/images/carousel/c7.jpg';
import c8 from '../../../assets/images/carousel/c8.jpg';
import c9 from '../../../assets/images/carousel/c9.jpg';
import c10 from '../../../assets/images/carousel/c10.jpg';
import c11 from '../../../assets/images/carousel/c11.jpg';
import c12 from '../../../assets/images/carousel/c12.jpg';
import c13 from '../../../assets/images/carousel/c13.jpg';

const ProductCarousel = () => {
  const [count, setCount] = useState<number>(1);
  const step = 200 * 2;

  const carouselRef = useRef() as MutableRefObject<HTMLDivElement>;
  const images = [
    { src: c1, alt: 'C1 Image' },
    { src: c2, alt: 'C2 Image' },
    { src: c3, alt: 'C3 Image' },
    { src: c4, alt: 'C4 Image' },
    { src: c5, alt: 'C5 Image' },
    { src: c6, alt: 'C6 Image' },
    { src: c7, alt: 'C7 Image' },
    { src: c8, alt: 'C8 Image' },
    { src: c9, alt: 'C9 Image' },
    { src: c10, alt: 'C10 Image' },
    { src: c11, alt: 'C11 Image' },
    { src: c12, alt: 'C12 Image' },
    { src: c13, alt: 'C13 Image' },
  ];

  const nextScroll = () => {
    if (
      count <=
      -(carouselRef.current.children.length - 1) *
        carouselRef.current.children[0].getClientRects()[0].width
    ) {
      return;
    } else {
      setCount((prev) => (prev -= step));
    }
  };

  const prevScroll = () => {
    if (count >= 1) {
      return;
    } else {
      setCount((prev) => (prev += step));
    }
  };

  return (
    <div className='carousel'>
      <div className='buttons'>
        <button className='next' onClick={nextScroll}></button>
        <button className='prev' onClick={prevScroll}></button>
      </div>
      <div
        className='inner_carousel'
        ref={carouselRef}
        style={{ transform: `translateX(${count}px)` }}
      >
        {images.map(({ src, alt }, idx) => (
          <div className='carousel_item' key={idx}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
