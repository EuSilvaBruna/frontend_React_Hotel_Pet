import './pets.css'
import {DataGrid} from '@material-ui/data-grid'

export default function Pets() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'nome', headerName: 'Nome', width: 170 },
        { field: 'tipo', headerName: 'Tipo', width: 170 },
        { field: 'raca', headerName: 'Raça', width: 170 },
        { field:'tamanho', headerName:'Tamanho',width:170},
    ];
    
    const rows = [
        { id: 1544841, nome:'Max', tipo: 'Cachorro', raca: 'Pastor Alemão', tamanho: 'Grande'},
    ];

    return (
        <div className="pets">
            <h1>Pets</h1>
            <button className="btns">Novo Pet</button>
            <div>
                <form className="formPets">
                    <div className="petsItem">
                        <label>Id</label>
                        <input></input>
                    </div>

                    <div className="petsItem">
                        <label>Raça</label>
                        <input></input>
                    </div>

                    <div className="petsItem">
                        <label>Nome</label>
                        <input></input>
                    </div>

                    <div className="petsItem">
                        <label>Tamanho</label>
                        <input></input>
                    </div>

                    <div>
                        <button className="btns">Pesquisar</button>
                        <button className="btns">Limpar</button>
                    </div>

                </form>
            </div>

            <div style={{ height: 400, width: '100%' }}>
            
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
