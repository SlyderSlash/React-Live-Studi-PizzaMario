import { CardArticle } from './CardArticle';

function ListArticles(props) {
  if (!props) {
    return (
      <div>
        <h1>Listing Pizza vide</h1>
      </div>
    );
  } else {
    return (
      <>
        <ul className='list-inline'>
          {props.articles.map((article) => {
            return (
              <li key={article.id} className='list-inline-item'>
                <CardArticle
                  name={article.name}
                  price={article.price}
                  img={article.img}
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ListArticles;
