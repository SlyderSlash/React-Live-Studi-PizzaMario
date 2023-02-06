import React from 'react';
import CardCompany from './CardCompany';

const CompanyListing = ({ data, handleClickSelectedCompany }) => {
  return (
    <>
      <section id='section-company-listing' className='section'>
        {/* <h2 className={!data ? 'd-none mt-5' : 'mt-5'} id='listing-company'>
          Listing des entreprises
        </h2> */}
        <h2 className='mt-5' id='listing-company'>
          Listing des entreprises
        </h2>

        <div className='row d-flex justify-content-center justify-content-md-between mt-3 mx-1 mx-md-0'>
          {data &&
            data.map((el) => {
              return (
                <CardCompany
                  key={el.siren}
                  name={el.nom_complet}
                  siren={el.siren}
                  dirigeants={el.dirigeants}
                  qtytotalEstablishment={el.nombre_etablissements}
                  qtytotalEstablishmentOpened={el.nombre_etablissements_ouverts}
                  handleClickSelectedCompany={handleClickSelectedCompany}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default CompanyListing;
