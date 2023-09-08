
import './colabs.css'

function Personagem ({nome, imagem, ator, corFundo}) {
    return (
    <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{ator}</h5>
        </div>
    </div>
    )
}

export default Personagem