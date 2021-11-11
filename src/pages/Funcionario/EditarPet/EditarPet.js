import './editarPet.css'

export default function EditarPet() {
    return (
        <div className="editarPet">
            <h1 className="tituloEditarPet">Editar Pet</h1>
            <form className="formEditarPet">
                <div className="editarPetItem">
                    <label>Nome</label>
                    <input></input>
                </div>

                <div className="editarPetItem">
                    <label>Tipo</label>
                    <input></input>
                </div>

                <div className="editarPetItem">
                    <label>Raça</label>
                    <input></input>
                </div>

                <div className="editarPetItem">
                    <label>Tamanho</label>
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
