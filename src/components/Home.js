import React from 'react'
import { Products } from './Products'

export const Home = () => {
  /*
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
*/
  return (
    <>
      {/* 
      <Header
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      />
    */}
      <div className='home'>

      <div className='intro'>

      <h1>Ver que poner en inicio</h1>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los
      mezcló de tal manera que logró hacer un libro de textos especimen. </p>
        </div>
      <Products/>

        {/* 
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      */}
      </div>
    </>
  )
}
