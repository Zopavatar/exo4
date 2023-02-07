import './App.css';

import {Card} from './components/card/card';

import elias from './img/elias.jpeg';
import cha from './img/charlotte.jpg';
import kadrie from './img/kadrie.jpeg';


function App() {

  let charlotte = { 
    nom: "Landuyt",
    prenom: "Charlotte",
    age: "24 ans",
    src: cha,
    background: "red",
    height: "80vh",
    width: "50vh" 
  };

  let k3 = {
    nom: "Ka",
    prenom: "Drie",
    age: "25 ans",
    src: kadrie,
    background: "blue",
    height: "60vh",
    width: "60vh"
  }

  let Elias = {
    nom: "Boss",
    prenom: "Elias",
    age: "30 ans",
    src: elias,
    background: "green",
    height: "60vh",
    width:"50vh"
  }

  let tab = [charlotte,k3,Elias];
  

  return (
    <div className="App">

        {tab.map((personne)=>(
            <Card nom={personne.nom} age={personne.age} prenom={personne.prenom} bgcolor={personne.background} la_height={personne.height} la_width={personne.width} img={personne.src}/>
        ))}
          
    </div>
  );
}

export default App;
