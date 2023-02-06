import React from 'react';

const CompanyInfo = ({ companySelected }) => {
  return (
    <>
      {/* const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; */}
      <section id='section-company-info' className='section'>
        <h2>
          Fiche de l'entreprise {companySelected.nom_complet.toUpperCase()}
        </h2>
        <div className='row mt-5'>
          <div className='col-12 col-lg-6 d-flex flex-column align-items-start justify-content-start'>
            <p>
              NOM DIRIGEANT :{' '}
              {companySelected.dirigeants.length > 0 &&
              companySelected.dirigeants[0].prenoms
                ? companySelected.dirigeants[0]?.prenoms +
                  ' ' +
                  companySelected.dirigeants[0].nom.toUpperCase()
                : companySelected.dirigeants.length > 0 &&
                  companySelected.dirigeants[0].denomination
                ? companySelected.dirigeants[0].denomination.toUpperCase()
                : 'NC'}
            </p>
            <p className='mb-0'>ADRESSE :</p>
            <p>{companySelected.siege.adresse}</p>
            <p className='mb-0'>ETAT ADMINISTRATIF :</p>
            <p>
              {companySelected.siege.etat_administratif === 'A' ? (
                <span className='text-success'>Ouvert</span>
              ) : (
                <span className='text-danger'>Fermé</span>
              )}
            </p>
            <p>
              DATE DE CREATION :{' '}
              {companySelected.siege.date_creation.slice(8, 10) +
                '/' +
                companySelected.siege.date_creation.slice(5, 7) +
                '/' +
                companySelected.siege.date_creation.slice(0, 4)}
            </p>
          </div>
          <div className='col-12 col-lg-6 d-flex flex-column align-items-start justify-content-start'>
            <p>N° SIREN : {companySelected.siren}</p>
            <p>ACTIVITE PRINCIPALE : {companySelected.activite_principale}</p>
            <p>
              QUANTITE TOTAL D'ETABLISSEMENT :{' '}
              {companySelected.nombre_etablissements}
            </p>
            <p>
              QUANTITE D'ETABLISSEMENT OUVERTS :{' '}
              {companySelected.nombre_etablissements_ouverts}
            </p>
            <p>
              DATE DE MISE A JOUR :{' '}
              {companySelected.date_mise_a_jour
                ? companySelected.date_mise_a_jour.slice(5, 7) +
                  '/' +
                  companySelected.date_mise_a_jour.slice(0, 4)
                : 'NC'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyInfo;
