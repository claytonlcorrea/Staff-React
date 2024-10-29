import Colaborador from '../Colaborador/Colaborador';
import './CardsEquipe.css';

function CardsEquipe(props) {
    const colaboradoresFiltrados = props.colaboradores.filter(colaborador => colaborador.equipe === props.nomeEquipe);

    return (
        colaboradoresFiltrados.length > 0 && (
            <section className='cardsEquipe' style={{ backgroundColor: props.corSecundaria }}>
                <h3 style={{ borderColor: props.corPrimaria }}>
                    {props.nomeEquipe}
                </h3>
                <div className='colaboradores'>
                    {colaboradoresFiltrados.map((colaborador, index) => (
                        <Colaborador
                            key={index}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo={props.corPrimaria} // Passando a cor primária para cada colaborador
                        />
                    ))}
                </div>
            </section>
        )
    );
}

export default CardsEquipe;
