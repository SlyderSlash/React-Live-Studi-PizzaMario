import './entrepriseslist.css';
import { Descriptions } from 'antd';

const EntreprisesList = (props) => {
  const { data } = props;

  const list = data.map((entreprise) => {
    const dirigeants = entreprise.dirigeants.map((dirigeant) => {
      return (
        <li key={dirigeant.prenoms + dirigeant.nom + dirigeant.qualite}>
          <span>{dirigeant.prenoms}</span> <span>{dirigeant.nom}</span>
          <p className="fonction">{dirigeant.qualite}</p>
        </li>
      );
    });

    return (
      <Descriptions
        className="description"
        key={entreprise.siren}
        title={entreprise.nom_complet}
        bordered
        column={{
          xxl: 4,
          xl: 3,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1,
        }}
      >
        <Descriptions.Item label="adresse">{entreprise.siege.adresse}</Descriptions.Item>
        <Descriptions.Item label="dirigeants">
          <ul className="listUl">{dirigeants}</ul>
        </Descriptions.Item>
        <Descriptions.Item label="date de création">
          {new Date(entreprise.siege.date_creation).toLocaleDateString('fr')}
        </Descriptions.Item>
        <Descriptions.Item label="nombre d'établissements">{entreprise.nombre_etablissements}</Descriptions.Item>
        <Descriptions.Item label="numéro de siren">{entreprise.siren}</Descriptions.Item>
      </Descriptions>
    );
  });

  return list;
};

export default EntreprisesList;
