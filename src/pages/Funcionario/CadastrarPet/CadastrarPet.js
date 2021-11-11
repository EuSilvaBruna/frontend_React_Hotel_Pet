import './cadastrarPet.css'

export default function CadastrarPet() {
    return (
        <div className="cadastrarPet">
            <h1>Novo Pet</h1>
            <form className="formCadastrarPet">

                <div className="cadastrarPetItem">
                    <label>Proprietário</label>
                    <input></input>
                </div>

                <div className="cadastrarPetItem">
                    <label>Nome</label>
                    <input></input>
                </div>

                <div className="cadastrarPetItem">
                    <label>Tipo</label>
                    <input></input>
                </div>

                <div className="cadastrarPetItem">
                    <label>Raça</label>
                    <input></input>
                </div>

                <div className="cadastrarPetItem">
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
