import banniere from '../assets/img/banniere.jpg';

const Home = () => {
  return (
    <>
      <h1>Bienvenu sur mes tentatives de code</h1>
      <div className="banniereBlock">
        <img className="banniere" src={banniere} alt="baniere humour développeur web" />
      </div>
      <h3>Cliquez sur un exercice dans la barre de navigation au dessus</h3>
    </>
  );
};

export default Home;
