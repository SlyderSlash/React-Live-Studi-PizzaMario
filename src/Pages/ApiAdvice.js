import React, { useEffect, useState } from 'react';
import Navigation from '../Components/Navigation';
import axios from 'axios';
import BotIllustration from '../Components/BotIllustration';

// https://api.adviceslip.com/

const ApiAdvice = () => {
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState(false);
  const [url, setUrl] = useState('https://api.adviceslip.com/advice');

  const handleClickGetAdvice7 = () => {
    setUrl('https://api.adviceslip.com/advice/7');
    setToggle(true);
  };
  const handleClickGetRndAdvice = () => {
    setUrl('https://api.adviceslip.com/advice');
    setToggle(true);
  };

  useEffect(() => {
    if (toggle) {
      axios.get(url).then((res) => setData(res.data.slip.advice));
    }
    setToggle(false);
  }, [toggle]);

  return (
    <>
      <Navigation />
      <main>
        <div className='container container-api-advice mt-5'>
          <h1 className='text-center mb-5'>API Advice</h1>
          <div className='row'>
            <BotIllustration />
            <div className='col-12 col-lg-6'>
              <div className='wrapper-msg'>
                <div className='msg-intro'>
                  <p className={data ? 'd-none' : ''}>
                    Click below to view an advice...
                  </p>
                  <button
                    type='button'
                    className='link-info-btn btn my-2'
                    onClick={handleClickGetAdvice7}
                  >
                    Need the advice n°7
                  </button>
                  <span className='mx-3'>or</span>
                  <button
                    type='button'
                    className='link-info-btn btn my-2'
                    onClick={handleClickGetRndAdvice}
                  >
                    Need a random advice
                  </button>
                </div>
                <div className='msg-api'>{data}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ApiAdvice;
