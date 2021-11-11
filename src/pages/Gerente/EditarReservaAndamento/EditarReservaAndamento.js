import './editarReservaAndamento.css'

export default function EditarReservaAndamento() {
    return (
        <div className="editarReservaAndamento">
            <div className="containerEditarReserva">
                <h1 className="tituloEditarReservaAndamento">Editar Reserva</h1>
                <form className="formEditarReservaAndamento">
                    <div className="editarReservaAndamentoItem">
                        <label>Proprietário*</label>
                        <input></input>
                    </div>
                    <div className="editarReservaAndamentoItem">
                        <label>Pet*</label>
                        <input></input>
                    </div>
                    <div className="editarReservaAndamentoPeriodoItem">
                        <label>Período</label>
                        <input></input>
                        <input></input>
                    </div>
                    
                    <div className="editarReservaAndamentoItem">
                        <label>Notas</label>
                        <input></input>
                    </div>
                    <div className="editarReservaAndamentoItem">
                        <label>Status*</label>
                        <input></input>
                    </div>
                    <div className="editarReservaAndamentoItem">
                        <label>Anotações do Funcionário</label>
                        <input></input>
                    </div>
                    <div className="editarReservaAndamentoItem">
                        <label>Foto</label>
                        <img className="foto"></img>
                    </div>
                    <div>
                        <p>Todas as diárias:</p>
                    </div>

                    <button className="btns">Salvar</button>
                    <button className="btns">Limpar</button>
                </form>
            </div>
        </div>
    )
}
