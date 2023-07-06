import React from 'react'
import { data } from '../../../data'
import { NavLink } from 'react-router-dom'
export const MouseG = () => {

	const productosFiltrados = data.filter(product => product.categoria === 'MouseGamer');

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
				<h1>Los 5 mejores mouse de amazon</h1>
				<p>
					En este artículo te presentaré los 5 mejores ratones (mouse) de Amazon. Para hacer esta lista, he tomado en cuenta factores como la calidad, la comodidad, la durabilidad, la precisión y la relación calidad-precio.<br/>
				</p>
					<ol>
						<li>
						Logitech MX Master 3: Este ratón inalámbrico es uno de los más populares y mejor valorados en Amazon. Ofrece una gran precisión y un diseño ergonómico que lo hace muy cómodo de usar. Además, cuenta con una batería de larga duración y una serie de funciones personalizables, como botones adicionales y desplazamiento rápido<br/>
						</li>
						<li>
						Razer DeathAdder Elite: Este ratón gaming de alta calidad es una excelente opción para los jugadores. Ofrece una gran precisión y velocidad de respuesta, además de contar con un diseño ergonómico que lo hace muy cómodo de usar durante largas sesiones de juego. También cuenta con un sensor óptico de alta calidad y una serie de botones programables.<br/>
						</li>
						<li>
						Microsoft Surface Precision Mouse: Este ratón inalámbrico de Microsoft es una excelente opción para los usuarios de Windows. Ofrece una gran precisión y un diseño ergonómico que lo hace muy cómodo de usar. Además, cuenta con una batería de larga duración y una serie de funciones personalizables, como botones adicionales y desplazamiento rápido.<br/>
						</li>
						<li>
						Corsair Scimitar RGB Elite: Este ratón gaming es una excelente opción para los jugadores que buscan una gran precisión y personalización. Ofrece un sensor óptico de alta calidad y una serie de botones programables que se pueden personalizar según las necesidades de cada juego. Además, cuenta con una iluminación RGB personalizable que le da un aspecto muy llamativo.<br/>
						</li>
						<li>
						Anker Vertical Ergonomic Optical Mouse: Este ratón ergonómico es una excelente opción para las personas que pasan muchas horas frente al ordenador. Ofrece un diseño vertical que ayuda a reducir la tensión en la muñeca y el brazo, lo que lo hace muy cómodo de usar. Además, cuenta con un sensor óptico de alta precisión y una serie de botones adicionales programables.<br/>
						</li>
					</ol>
				<p>
					Estos son los mejores 5 ratones de Amazon en mi opinión, pero hay muchas otras opciones disponibles que también pueden ser excelentes para diferentes necesidades y presupuestos. Es importante tener en cuenta lo que se busca en un ratón antes de tomar una decisión de compra para asegurarse de elegir el modelo adecuado.<br/>
				</p>
			</div>
		</>
	)
}
