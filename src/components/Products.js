import {React, useState} from 'react'
import { dataSecciones } from '../dataSecciones'
import { ArticleListP } from './layout/ArticleListP'
import { ButtonListP } from './layout/ButtonListP'

export const Products = () => {

	const allCategories = [
		'All',
		...new Set(dataSecciones.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(dataSecciones);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(dataSecciones)
			return
		} 

		const filtereddataSecciones = dataSecciones.filter(article => article.category === category);
		setArticles(filtereddataSecciones)
	}

	return (
		<>
		    <ButtonListP categories={categories} filterCategory={filterCategory} />
			<ArticleListP articles={articles}/>
		</>
	)
}
