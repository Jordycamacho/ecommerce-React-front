import React from 'react'
import { data } from '../../../data'
import { NavLink } from 'react-router-dom'

export const SillaG = () => {

	const productosFiltrados = data.filter(product => product.categoria === 'SillaGamer');

	return (
		<>
			<div className='container-items'>
				{productosFiltrados.map(product => (
					<NavLink className="s" to={product.link}>
						<div className='item' key={product.id}>
							<figure>
								<img src={product.img} alt={product.nameProduct} />
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

			<div className='categorias_productos'>
				<h1>las 5 mejores sillas gamer</h1>
				<p>
					Las sillas gamer son un elemento esencial para cualquier persona que pase largas horas sentada frente a una pantalla jugando videojuegos. Estas sillas están 
					diseñadas para proporcionar comodidad y soporte durante largos períodos de tiempo y también tienen un aspecto estético que las hace perfectas para cualquier 
					entorno de juego. En Amazon, hay una gran variedad de sillas gamer de alta calidad, pero aquí están las 5 mejores. 
			    </p>
					<ol>
						<li>
						Secretlab Omega: La Secretlab Omega es una silla gamer de alta calidad que cuenta con un diseño ergonómico y está fabricada con materiales de alta calidad. Esta silla tiene una capacidad de peso de hasta 110 kg y es adecuada para personas de hasta 180 cm de altura. El diseño ergonómico de la Secretlab Omega ofrece un excelente soporte lumbar y de cuello, lo que la hace perfecta para sesiones de juego prolongadas.
						</li>
						<li>
						Respawn 110 Racing Style Gaming Chair: La Respawn 110 Racing Style Gaming Chair es una silla gamer de alta calidad que cuenta con un diseño ergonómico y está fabricada con materiales duraderos. Esta silla tiene un peso máximo de 125 kg y es adecuada para personas de hasta 185 cm de altura. La Respawn 110 Racing Style Gaming Chair también cuenta con un sistema de ajuste de altura y una inclinación de 155 grados.
						</li>
						<li>
						Respawn 110 Racing Style Gaming Chair: La Respawn 110 Racing Style Gaming Chair es una silla gamer de alta calidad que cuenta con un diseño ergonómico y está fabricada con materiales duraderos. Esta silla tiene un peso máximo de 125 kg y es adecuada para personas de hasta 185 cm de altura. La Respawn 110 Racing Style Gaming Chair también cuenta con un sistema de ajuste de altura y una inclinación de 155 grados.
						</li>
						<li>
						DXRacer Racing Series: La DXRacer Racing Series es una silla gamer que ofrece una excelente combinación de comodidad y estilo. Esta silla está diseñada para proporcionar soporte lumbar y de cuello, lo que ayuda a reducir el estrés en el cuerpo durante largas horas de juego. La DXRacer Racing Series también cuenta con un sistema de ajuste de altura, lo que la hace adecuada para personas de diferentes alturas.
						</li>
						<li>
						GT Racing GT099 Gaming Chair: La GT Racing GT099 Gaming Chair es una silla gamer que ofrece una excelente combinación de comodidad y estilo. Esta silla está diseñada para proporcionar soporte lumbar y de cuello, lo que ayuda a reducir el estrés en el cuerpo durante largas horas de juego. La GT Racing GT099 Gaming Chair también cuenta con un sistema de ajuste de altura, lo que la hace adecuada para personas de diferentes alturas.
						</li>
					</ol>
					
					<p>
					En resumen, estas son las 5 mejores sillas gamer de Amazon. Cada una de estas sillas ofrece una excelente combinación de comodidad y estilo, así como un soporte adecuado para largas sesiones de juego. Si estás buscando una silla gamer de alta calidad, cualquiera de estas opciones es una excelente elección.
				
					</p>
			</div>
		</>
	)
}
