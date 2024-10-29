import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import Dropdown from "../Dropdown/Dropdown";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState(null); // Alterado para armazenar o arquivo da imagem
    const [equipe, setEquipe] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem: imagem ? URL.createObjectURL(imagem) : null, // Gera URL da imagem para exibição
            equipe
        });
    };

    const aoSelecionarImagem = (evento) => {
        setImagem(evento.target.files[0]); // Armazena o arquivo da imagem selecionada
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                
                {/* Novo campo para selecionar a imagem */}
                <div className="campo-texto">
                    <label>Imagem</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={aoSelecionarImagem}
                    />
                </div>

                <Dropdown
                    obrigatorio={true}
                    label="Equipe" 
                    itens={props.equipe}
                    valor={equipe}
                    aoAlterado={valor => setEquipe(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
