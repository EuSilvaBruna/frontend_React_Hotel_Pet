import './editarPerfil.css'

export default function EditarPerfil() {
    return (
        <div className="editarPerfil">
            <h1>Editar Perfil</h1>
            <form className="formEditarPerfil">
                <div className="cadastrarPerfilItem">
                    <label>Email</label>
                    <input></input>
                </div>

                <div className="cadastrarPerfilItem">
                    <label>Nome</label>
                    <input></input>
                </div>

                <div className="cadastrarPerfilItem">
                    <label>Sobrenome</label>
                    <input></input>
                </div>

                <div className="cadastrarPerfilItem">
                    <label>Telefone</label>
                    <input></input>
                </div>

                <div>
                    <button className="btns">Pesquisar</button>
                    <button className="btns">Limpar</button>
                </div>
            </form>
        </div>
    )
}
