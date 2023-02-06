import React from 'react';
import Navigation from '../Components/Navigation';
import illustrationReact from '../assets/img/illustration-react.png';

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <div className='container container-home'>
          <h1 className='mb-5'>React</h1>
          <img
            src={illustrationReact}
            className='illustration-react mb-3'
            alt='logo'
          />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Documentation
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
