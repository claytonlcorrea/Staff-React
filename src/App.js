import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario.js';
import CardsEquipe from './componentes/CardsEquipe/CardsEquipe.js';

function App() {

  const cardEquipes = [{
    id: '01',
    nome: 'Administrativo',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9'
  },
  {
    id: '02',
    nome: 'Financeiro',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
  },
  {
    id: '03',
    nome: 'Marketing',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
  },
  {
    id: '04',
    nome: 'Recursos Humanos',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF', 
  },
  {
    id: '05',
    nome: 'Suporte',
    corPrimaria: '#9FC131',
    corSecundaria: '#D6D58E',
  },
]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario equipe={cardEquipes.map(equipe => equipe.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {cardEquipes.map(equipe => <CardsEquipe
         key={equipe.id} 
         nomeEquipe={equipe.nome} 
         corPrimaria={equipe.corPrimaria} 
         corSecundaria={equipe.corSecundaria}
         colaboradores={colaboradores}
         
         />)}
        
    </div>
  );
}

export default App;

