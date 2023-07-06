import { NavLink } from 'react-router-dom'

export const ArticleListP = ({ articles }) => {
    return ( 
        <div className='container-items'>
            {articles.map(articles => (
                <>
            <NavLink className="s" to={articles.ubicacion}>
                    <div className='item' key={articles.id}>
                        <figure>
                            <img src={articles.img} alt={articles.namearticles} />
                        </figure>
                        <div className='info-articles'>
                            <h2>{articles.nameProduct}</h2>
                            <p className='categoria'><strong>Categoria:</strong> {articles.category}</p>
                            <button className='btn-clear-all '>
                                    Ir a la seccion
                            </button>
                        </div>
                    </div>
            </NavLink> 
                </>
            ))}
        </div>
    )
};
