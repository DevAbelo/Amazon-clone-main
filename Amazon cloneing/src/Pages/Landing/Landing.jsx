
import React from 'react'
import CarouselEffect from '../../Components/Carousel/Carousel';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';
import LayOut from '../../Components/Layout/LayOut';

// Functional component representing the landing page of the application
function Landing() {


  return (
    <LayOut>
      <CarouselEffect />{/* Carousel section displaying a slideshow */}
      <Category />  {/* Category section displaying product categories */}
      <Product />{/* Product section displaying a list of products */}
    </LayOut>
  );
}

export default Landing // Exporting the component for use in other parts of the application