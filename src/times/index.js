
import Personagem from '../colaboradores'
import './times.css'

function Time (props) {
    
    const css = {backgroundColor: props.corSecond}

    return (

    (props.personagem.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corFirst}}>{props.nome}</h3>
            <div className='personagens'>
                {props.personagem.map (personagem => <Personagem corFundo={props.corFirst} key={personagem.nome} nome={personagem.nome} ator={personagem.ator} imagem={personagem.imagem} />)}
            </div>
        </section>
    )
}

export default Time