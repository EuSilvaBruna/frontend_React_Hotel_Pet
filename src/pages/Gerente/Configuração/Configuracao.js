import './configuracao.css'

export default function Configuracao() {
    return (
        <div className="configuracao">
            <h1>Configurações</h1>
            <form className="formConfiguracao">
                <div className="configuracaoItem">
                    <label>Valor da diária</label>
                    <input></input>
                </div>

                <div className="configuracaoItem">
                    <label>Vagas disponíveis</label>
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
