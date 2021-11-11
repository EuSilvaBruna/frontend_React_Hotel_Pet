import   './cadastrarUsuario.css'

export default function CadastrarUsuario() {
    return (
        <div className="cadastrarUsuario">
            <div className="containerCadastrar">
                <h1 className="tituloCadastrarUsuario">Editar Perfil</h1>
                <form className="formCadastrarUsuario">
                    <div className="cadastrarUsuarioItem">
                        <label>Nome*</label>
                        <input type="text" placeholder="Maria Joana" />
                    </div>

                    <div className="cadastrarUsuarioItem">
                        <label>Sobrenome*</label>
                        <input type="text" placeholder="Silva Santos" />
                    </div>

                    <div className="cadastrarUsuarioItem">
                        <label>Email*</label>
                        <input type="email" placeholder="mariajoana@hotmail.com" />
                    </div>
                
                    <div className="cadastrarUsuarioItem">
                        <label>Telefone*</label>
                        <input type="tel" placeholder="(73)99999-8888" />
                    </div>

                    <div className="cadastrarUsuarioItem">
                        <label>Foto*</label>
                        <img className="foto"></img>
                    </div>
                    <button className="btns">Salvar</button>
                    <button className="btns">Limpar</button>
                
                </form>
            </div>
        </div>
        
    )
}