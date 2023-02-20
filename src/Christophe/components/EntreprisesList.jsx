import { Descriptions } from 'antd';
import './entrepriseslist.css';

const EntreprisesList = (props) => {
  const { data } = props;

  const list = data.map((entreprise) => {
    const dirigeants = entreprise.dirigeants.map((dirigeant) => {
      return (
        <>
          <li>{dirigeant.nom}</li>
          <li>{dirigeant.prenoms}</li>
        </>
      );
    });

    return (
      <Descriptions title={entreprise.nom_complet} className="description" key={entreprise.siren}>
        <Descriptions.Item label="adresse">{entreprise.siege.adresse}</Descriptions.Item>
        <Descriptions.Item label="nombre d'établissements">{entreprise.nombre_etablissements}</Descriptions.Item>
        <Descriptions.Item label="date de création">{entreprise.siege.date_creation}</Descriptions.Item>
        <Descriptions.Item label="dirigeants">
          <ul className='listUl'>{dirigeants}</ul>
        </Descriptions.Item>
        <Descriptions.Item label="numéro de siren">{entreprise.siren}</Descriptions.Item>
      </Descriptions>
    );
  });


  return list;
};

export default EntreprisesList;
