import './reservas.css'

import {DataGrid} from '@material-ui/data-grid'

export default function Reservas() {
    const columns = [
        { field: 'id', headerName: 'Id', width: 100 },
        { field: 'pet', headerName: 'Pet', width: 110 },
        { field: 'chegada', headerName: 'Chegada', width: 190 },
        { field: 'partida', headerName: 'Partida', width: 160 },
        { field:'status', headerName:'Status', width:130},
        { field:'total', headerName:'Total',width:130},
    ];
    
    const rows = [
        { id: "1", pet:'Mel', chegada: '21/07/2021', partida: '23/07/2021', status: 'Ativo', total:'R$ 120,00'},
    ];

   
    return (
        <div className="reservas">
            <h1 className="tituloReservas">Reservas</h1>
            <button className="btns">Nova Reserva</button>
            <div>
                <form className="formReservas">
                    <div className="reservaItem">
                        <label>Id*</label>
                        <input></input>
                    </div>
                    <div className="reservaItem">
                        <label>Proprietário*</label>
                        <input></input>
                    </div>
                    <div className="reservaItem">
                        <label>Status*</label>
                        <input></input>
                    </div>
                    <div className="reservaItem">
                        <label>Pet*</label>
                        <input></input>
                    </div>
                    <div className="reservaItem">
                           <label>Período</label>
                           <input></input>
                    </div>
                    <div className="reservaItem">
                           <label>Total</label>
                           <input></input>
                    </div>

                    <div className="btn_config">
                        <button className="btns">Pesquisar</button>
                        <button className="btns">Limpar</button>
                    </div>
                </form>
            </div>

            <div style={{ height: 450, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

        </div>
    )
}
