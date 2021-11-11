import './visualizarPet.css'

export default function VisualizarPet() {
    return (
        <div className="visualizarPet">
            <h1 className="tituloVisalizarPet">Ver Pet</h1>
            <button className="btns">Editar</button>
            <button className="btns">Deletar</button>

            <div className="dadosContainer">
                <p>Proprietário:</p>
                <p>Id:</p>
                <p>Nome:</p>
                <p>Tipo:</p>
                <p>Raça:</p>
                <p>Imagem:</p>
                <p>Reservas</p>
            </div>
            <button className="btns">Voltar</button>
        </div>
    )
}
