import React, { useEffect, useRef, useState } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

const EstablishmentDetails = ({ establishment, index }) => {
  const mapElement = useRef();
  const [map, setMap] = useState({});

  useEffect(() => {
    const key = 'NS5mPJ7gvgfZ1P8L4Sfk4FfnuwxPOgFP';
    let map = tt.map({
      key: key,
      container: mapElement.current,
      center: [establishment.longitude, establishment.latitude],
      zoom: 17,
    });
    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <>
      <div className='row mt-5'>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-start justify-content-start'>
          <div key={establishment.siret}>
            <h3 className='h4 mt-5 mb-4'>
              {index === 0 ? `${index + 1}er` : `${index + 1}ème`} Etablissement
            </h3>
            <p>
              ADRESSE :
              <br /> {establishment.adresse}
            </p>
            <p>
              N° SIRET :
              <br /> {establishment.siret}
            </p>
            <p>
              ETAT ADMINISTRATIF :
              <br />
              {establishment.etat_administratif === 'A' ? (
                <span className='text-success'>Ouvert</span>
              ) : (
                <span className='text-danger'>Fermé</span>
              )}
            </p>
          </div>
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center align-items-md-start justify-content-center'>
          <div
            ref={mapElement}
            className='bg-success mapDiv rounded mx-2 mx-md-0'
          ></div>
        </div>
        <hr className='mt-5' />
      </div>
    </>
  );
};

export default EstablishmentDetails;
