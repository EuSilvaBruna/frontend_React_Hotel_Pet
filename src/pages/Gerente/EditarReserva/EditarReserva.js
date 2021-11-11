import './editarReserva.css'

export default function EditarReserva() {
    return (
        <div className="editarReserva">
            <h1>Editar Reserva</h1>

            <form className="formEditarReserva">
                <div className="editarReservaItem">
                    <label>Proprietário</label>
                    <input></input>
                </div>

                <div className="editarReservaItem">
                    <label>Pet</label>
                    <input></input>
                </div>

                <div className="editarReservaItem">
                    <label>Período</label>
                    <input type="date"></input>
                </div>

                <div className="editarReservaItem">
                    <label>Notas</label>
                    <input></input>
                </div>

                <div className="editarReservaItem">
                    <label>Status</label>
                    <select></select>
                </div>

                <div className="editarReservaItem">
                    <p className="para_total">Total das diárias: </p>
                </div>

                <div>
                    <button className="btns">Pesquisar</button>
                    <button className="btns">Limpar</button>
                </div>
            </form>
        </div>
    )
}
