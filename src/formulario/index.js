import Botao from "../botao/botao"
import CampoTexto from "../campoTexto"
import Listaselect from "../lista/lista"
import './formulario.css'
import { useState } from 'react'


function Formulario(props) {


    const [nome, setNome] = useState('')
    const [ator, setAtor] = useState('')
    const [imagem, setImagem] = useState('')
    const [profissao, setProfissao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersoAdd({
            nome, 
            ator,
            imagem,
            profissao
        })
        setNome('')
        setAtor('')
        setImagem('')
        setProfissao('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2 className="campoParagrafo">Preencha os campos abaixo para criar os personagens da série Friends</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Nome do personagem"
                valor={nome}
                aoAlterado={valor => setNome (valor)} />

                <CampoTexto 
                obrigatorio={true} 
                label="Ator" 
                placeholder="Nome do ator"
                valor={ator}
                aoAlterado={valor => setAtor(valor)} />

                <CampoTexto 
                label="Imagem" 
                placeholder="Endereço da imagem"
                valor= {imagem}
                aoAlterado={valor => setImagem(valor)} />

                <Listaselect 
                obrigatorio={true} 
                label="Profissão" 
                itens = {props.times} 
                valor={profissao}
                aoAlterado={valor=> setProfissao(valor)} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario