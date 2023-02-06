import React from 'react';

import EstablishmentDetails from './EstablishmentDetails';

const EstablishmentsInfo = ({ companySelected }) => {
  return (
    <>
      <section id='section-establishments-info' className='section'>
        <h2>Listing des établissements</h2>
        {companySelected.matching_etablissements?.map(
          (establishment, index) => (
            <EstablishmentDetails
              key={establishment.siret}
              establishment={establishment}
              index={index}
            />
          )
        )}
      </section>
    </>
  );
};

export default EstablishmentsInfo;
