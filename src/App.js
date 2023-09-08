import { useState } from 'react'
import './App.css';
import Formulario from './formulario';
import Banner from './banner';
import Time from './times';
import Rodape from './rodape/rodape';


function App() {
  const times = [
    {
      nome: 'Moda',
      corPrimaria: '#EC53B0',
      corSecundaria: '#FFC7EA '
    },
    {
      nome: 'Contador',
      corPrimaria: '#337CCF',
      corSecundaria: '#C5DFF8'
    },
    {
      nome:'Cozinheira',
      corPrimaria: '#FFC436',
      corSecundaria: '#FBF0B2'
    },
    {
      nome: 'Palentólogo',
      corPrimaria: '#65451F',
      corSecundaria: '#EAC696'
    },
    {
      nome:'Cantora',
      corPrimaria: '#F31559',
      corSecundaria: '#F2D8D8'
    },
    {
      nome:'Ator',
      corPrimaria: '#A0D8B3',
      corSecundaria: '#D6E8DB'
    }
  ]
  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdd = (personagem) =>{
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(profissao => profissao.nome)} aoPersoAdd={personagem => aoNovoPersonagemAdd(personagem)}/>
      {times.map(profissao => <Time 
      key={profissao.nome} 
      nome={profissao.nome} 
      corFirst={profissao.corPrimaria} 
      corSecond={profissao.corSecundaria}
      personagem = {personagens.filter(personagem => personagem.profissao === profissao.nome)}

      />)}
      <Rodape />


    </div>
  );
}

export default App;
