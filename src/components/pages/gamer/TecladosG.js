import React from 'react'
import { data } from '../../../data'
import { NavLink } from 'react-router-dom'

export const TecladosG = () => {

  const productosFiltrados = data.filter(product => product.categoria === 'TecladoGamer');

  return ( 
    <>
    <div className='container-items'>
			{productosFiltrados.map(product => (
				<NavLink className="s" to={product.link}>
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img}  alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>$ {product.price}</p>
						<button>
						    Ver en amazon
						</button>
					</div>
				</div>
				</NavLink>
			))}
		</div>
		     
    </>
  )
}
