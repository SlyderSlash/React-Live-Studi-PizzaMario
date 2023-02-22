import { useState } from 'react';
/* import EntreprisesList from './EntreprisesList'; */
import './entreprises.css';
import Test from './EntreprisesList';

const Entreprises = () => {
  const [entrepriseList, setEntreprisesList] = useState([]); // API grâce nom de l'entreprise
  const [inputValue, setInputValue] = useState(''); // valeur ds l input
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`https://recherche-entreprises.api.gouv.fr/search?q=${inputValue}&page=1&per_page=10`)
      .then((response) => response.json())
      .then((json) => setEntreprisesList(json.results))
      .catch((err) => {
        setError(`Erreur lors de l'appel API, veuillez réessayer plus tard, cordialement`);
        console.error(err);
      });
    return setInputValue('');
  };

  const handleChange = (e) => {
    return setInputValue(e.target.value);
  };

  return (
    <>
      <h3>Requêter les entreprises</h3>

      <h5>Nom de l'entreprise recherchée :</h5>
      {error && <span>{error}</span>}
      <form>
        <label htmlFor="name"></label>
        <input type="text" name="name" value={inputValue} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Rechercher
        </button>
      </form>
      <section className="listBlock">
       {/*  <EntreprisesList data={entrepriseList} /> */}
        <Test data={entrepriseList}/>
      </section>
    </>
  );
};

export default Entreprises;
