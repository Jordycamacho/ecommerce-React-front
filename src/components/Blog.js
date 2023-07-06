import React from 'react'
import { useState} from 'react';
import datas from '../datas';
import { ArticleList } from './layout/ArticleList';
import { ButtonList } from './layout/ButtonList';
 
export const Blog = () => {

  const allCategories = [
		'All',
		...new Set(datas.map(article => article.category)),
	];
 
	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(datas);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(datas)
			return
		}

		const filtereddatas = datas.filter(article => article.category === category);
		setArticles(filtereddatas)
	}

  return (
    <>
	  <ButtonList categories={categories} filterCategory={filterCategory} />
      <ArticleList articles={articles} />
    </>
  )
}