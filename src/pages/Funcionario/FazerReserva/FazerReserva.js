import './fazerReserva.css'

export default function FazerReserva() {
    return (
        <div className="fazerReserva">
           <h1>Fazer Reserva</h1> 
           <form className="formFazerReserva">
               <div className="fazerReservaItem">
                   <label>Pet</label>
                   <input></input>
               </div>
               <div className="fazerReservaItem">
                   <label>Período</label>
                   <input></input>
               </div>

               <div className="fazerReservaItem">
                   <label>Notas</label>
                   <input></input>
               </div>

            
               <div className="fazerReservaItem">
                   <p className=" para_total">Total das diárias:</p>
               </div>
               

               <div>
                    <button className="btns">Pesquisar</button>
                    <button className="btns">Limpar</button>
                </div>
           </form>
        </div>
    )
}
