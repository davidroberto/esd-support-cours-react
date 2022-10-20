import './App.css';
import Header from './Header';
import Meals from './Meals';

function App() {
  return (
    //  permet de définir un parent "vide", car un composant
    // react ne peut avoir qu'un seul parent défini dans son jsx (comme dans
    //  createElement(())
    <>
    {/* j'importe les composants Header et Meals, pour récupérer leur contenu jsx */}
      <Header />
      <Meals />
    </>  
  );
}

export default App;
