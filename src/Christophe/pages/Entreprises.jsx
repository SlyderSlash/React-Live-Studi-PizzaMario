import { useState } from 'react';
import { Input } from 'antd';
import './entreprises.css';
import EntreprisesList from '../components/EntreprisesList';
const { Search } = Input;

const Entreprises = () => {
  const onSearch = (value) => {
    fetch(`https://recherche-entreprises.api.gouv.fr/search?q=${value}&page=1&per_page=10`)
      .then((response) => response.json())
      .then((json) => setEntreprisesList(json.results))
      .catch((err) => {
        setError(`Erreur lors de l'appel API, veuillez réessayer plus tard, cordialement`);
        console.error(err);
      });
  };
  const [entrepriseList, setEntreprisesList] = useState([]); // API grâce nom de l'entreprise
  const [error, setError] = useState(false);


  return (
    <>
      <h3>Chercher une entreprise</h3>

      {error && <span>{error}</span>}
      <form>
        <Search
          placeholder="Entrez le nom de l'entreprise"
          onSearch={onSearch}
          style={{
            width: 400,
          }}
        />
      </form>
      <section className="listBlock">
        <EntreprisesList data={entrepriseList} />
      </section>
    </>
  );
};

export default Entreprises;
