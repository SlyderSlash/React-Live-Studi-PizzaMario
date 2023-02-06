import React from 'react';
import company from '../assets/img/company.png';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const CardCompany = ({
  name,
  siren,
  dirigeants,
  qtytotalEstablishment,
  qtytotalEstablishmentOpened,
  data,
  handleClickSelectedCompany,
}) => {
  //   const handleClickSelectedCompany = (siren) => {
  //     console.log(siren);
  //   };
  return (
    <>
      <div className='card card-articles m-3'>
        <div className='card-header'>
          <img
            src={company}
            className='card-img-top card-ill-company'
            alt='illustration company'
          />
        </div>
        <div className='card-body'>
          <h3 className='h4 card-title text-center mt-2 mb-4'>
            {name.toUpperCase()}
          </h3>
          <p className='card-text'>N° SIREN: {siren}</p>

          <p className='card-text'>
            Dirigeant:{' '}
            {dirigeants.length > 0 && dirigeants[0].prenoms
              ? capitalizeFirstLetter(dirigeants[0]?.prenoms) +
                ' ' +
                dirigeants[0].nom.toUpperCase()
              : dirigeants.length > 0 && dirigeants[0].denomination
              ? dirigeants[0].denomination.toUpperCase()
              : 'NC'}
          </p>
          <p className='card-text'>
            Qtt total étalissements: {qtytotalEstablishment}
          </p>
          <p className='card-text'>
            Qtt étalissements ouverts: {qtytotalEstablishmentOpened}
          </p>
          <a
            className='link-info-btn btn w-100'
            href={'/api-gouv/#section-company-info'}
            onClick={() => handleClickSelectedCompany(siren)}
          >
            Plus d'informations
          </a>
        </div>
      </div>
    </>
  );
};

export default CardCompany;
