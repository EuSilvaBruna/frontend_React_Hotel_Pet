import './verReserva.css'

export default function VerReserva() {
    return (
        <div className="verReserva">
            <h1 className="tituloVerReserva">Ver Reserva</h1>
            <div className="dadosContainer">
                <p>Id:</p>
                <p>Proprietário:</p>
                <p>Pet:</p>
                <p>Chegada:</p>
                <p>Partida:</p>
                <p>Notas:</p>
                <p>Anotações dos Funcionários:</p>
                <p>Imagens:</p>
                <p>Status:</p>
                <p>Total das diárias:</p>
                <p>Recibo:</p>
                <p>Criado em:</p>
                <p>Atualizado em:</p>
                <button className="btns">Voltar</button>
            </div>
        </div>
    )
}
