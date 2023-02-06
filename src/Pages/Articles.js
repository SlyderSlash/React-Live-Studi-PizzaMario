import React from 'react';
import ListArticles from '../Components/ListArticles';
import Navigation from '../Components/Navigation';

const Articles = (props) => {
  return (
    <>
      <Navigation />
      <div className='container container-articles mt-5'>
        <h1 className='text-center mb-5'>Listing Pizza</h1>
        <ListArticles articles={props.articles} />
      </div>
    </>
  );
};

export default Articles;
