import {CardArticle} from './CardArticle'
import Article from './Article'

function ListArticles (props) {
    if(!props){return <div><h1>Pas d'article</h1></div>}
    else {
        const articlesListing = props.articles.map((article)=> {
            if (article.price) 
            return <Article name={article.name} price={article.price}/>
            else return null
        })
        console.log(articlesListing)
        return (
            <div className='pizzaCards'>
                {articlesListing}
            </div>
        )
    }
}

export default ListArticles