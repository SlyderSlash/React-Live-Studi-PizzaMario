import React, { useEffect, useState } from 'react';
import BotIllustration from '../Components/BotIllustration';
import company from '../assets/img/company.png';
import Navigation from '../Components/Navigation';
import axios from 'axios';
import CompanyInfo from '../Components/CompanyInfo';
import EstablishmentsInfo from '../Components/EstablishmentsInfo';
import CompanyListing from '../Components/CompanyListing';

// https://recherche-entreprises.api.gouv.fr/search?q=studi&page=1&per_page=10
const ApiGouv = () => {
  const [companyNameSearch, setCompanyNameSearch] = useState('');
  const [companySelected, setCompanySelected] = useState([]);
  const [url, setUrl] = useState('');
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('');

  const handleChange = (e) => {
    setCompanyNameSearch(e.target.value);
  };

  const handleClick = () => {
    if (companyNameSearch.length > 3) {
      setUrl(
        `https://recherche-entreprises.api.gouv.fr/search?q=${companyNameSearch}&page=1&per_page=10`
      );
      setToggle(true);
    }
  };

  const handleClickSelectedCompany = (id) => {
    setCompanySelected(data.filter((el) => el.siren === id));
  };

  console.log(companyNameSearch);
  useEffect(() => {
    console.log(toggle);

    if (toggle) {
      console.log(url);
      axios.get(url).then((res) => {
        setData(res.data.results);
        setCompanyNameSearch('');
        // console.log(res.data.results);
      });
    }
    setToggle(false);
    return () => {
      setData('');
    };
  }, [toggle]);

  return (
    <>
      <Navigation />
      <main>
        <div className='container container-api-gouv mt-5'>
          <h1 className='text-center mb-5'>API Gouv.fr</h1>
          <div className='row'>
            <BotIllustration />
            <div className='col-12 col-lg-6'>
              <div className='wrapper-msg my-3'>
                <div className='msg-intro'>
                  <p>Recherche d'informations sur une entreprise</p>
                  <div className='input-group flex-nowrap mb-3'>
                    <span className='input-group-text' id='addon-wrapping'>
                      <img
                        src={company}
                        alt='icon company'
                        className='icon-company'
                      />
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      placeholder="nom de l'entreprise"
                      aria-label="nom de l'entreprise"
                      aria-describedby='addon-wrapping'
                      onChange={handleChange}
                      value={companyNameSearch}
                    />
                  </div>
                  <button className='link-info-btn btn' onClick={handleClick}>
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
          {data && (
            <CompanyListing
              data={data}
              handleClickSelectedCompany={handleClickSelectedCompany}
            />
          )}

          {companySelected[0] && (
            <>
              <CompanyInfo companySelected={companySelected[0]} />
              <EstablishmentsInfo companySelected={companySelected[0]} />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ApiGouv;
