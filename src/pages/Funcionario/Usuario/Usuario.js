import './usuario.css'
import {PersonAdd, Check} from '@material-ui/icons'
import {DataGrid} from '@material-ui/data-grid'

export default function Usuario() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'foto', headerName: 'Foto', width: 110 },
        { field: 'email', headerName: 'Email', width: 190 },
        { field: 'nome', headerName: 'Nome', width: 160 },
        { field:'função', headerName:'Função',width:130},
        { field:'status', headerName:'Status',width:130},
        { field:'criação', headerName:'Criado em',width:150},
    ];
    
    const rows = [
        { id: 1, foto:'', email: 'mariajoana@hotmail.com', nome: 'Maria Joana Silva', função: 'Gerente', status:'ativo', criação: '12/7/2021'},
    ];

    return (
        <div className="usuario">
            <h1>Usuários</h1>
            <button className="btns_new">
                <PersonAdd />
                Novo
            </button>
            <button className="btns_new">
              
                Remover
            </button>
            <button className="btns_new aum">
                <Check />
                Mudar Status
            </button>
            <div>
                Visualizado por: 
                <button className="btns_secun">Usuários</button>
                <button className="btns_secun">Função</button>
            </div>

            <div>
                <form  className="formUsuario">
                    <div className="usuarioItem">
                        <label>Id*</label>
                        <input></input>
                    </div>
                    <div className="usuarioItem">
                        <label>Criado em*</label>
                        <input></input>
                    </div>
                    <div className="usuarioItem">
                        <label>Email*</label>
                        <input></input>
                    </div>
                    <div className="usuarioItem">
                        <label>Nome*</label>
                        <input></input>
                    </div>
                    <div className="usuarioItem">
                        <label>Status*</label>
                        <input></input>
                    </div>
                    <div className="usuarioItem">
                        <label>Função*</label>
                        <input></input>
                    </div>

                 
                    <div>
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
