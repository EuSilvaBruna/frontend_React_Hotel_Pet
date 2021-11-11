import './editarReservaFinalizada.css'



export default function EditarReservaFinalizada() {
    return (
        <div className="editarReservaFinalizada">
            <h1>Editar Reserva</h1>

            <form className="formEditarReservaFinalizada">
                <div className="editarReservaFinalizadaItem">
                    <label>Proprietário</label>
                    <input></input>
                </div>

                <div className="editarReservaFinalizadaItem">
                    <label>Pet</label>
                    <input></input>
                </div>

                <div className="editarReservaFinalizadaItem">
                    <label>Período</label>
                    <input type="date"></input>
                </div>

                <div className="editarReservaFinalizadaItem">
                    <label>Notas</label>
                    <input></input>
                </div>

                <div className="editarReservaFinalizadaItem">
                    <label>Status</label>
                    <select></select>
                </div>

                <div className="editarReservaFinalizadaItem">
                    <p className="para_total">Total das diárias: </p>
                </div>
                <div className="editarReservaFinalizadaItem">
                    <a href="">Adicionar nota fiscal</a>
                </div>
                
                <div className="editarReservaFinalizadaItem">
                    <a href="">recibo</a>
                </div>
                
                <div>
                    <button className="btns">Pesquisar</button>
                    <button className="btns">Limpar</button>
                </div>

                
            </form>
        </div>
    )
}
