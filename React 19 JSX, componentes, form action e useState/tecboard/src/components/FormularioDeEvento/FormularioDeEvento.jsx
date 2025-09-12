import './FormularioDeEvento.module.css';

export default function FormularioDeEvento() {
    return (
        <form className="form-evento">
            <h2>Preencha para criar um Evento:</h2>
            <fieldset>
                <label htmlFor="nome">Qual o nome do Evento?</label>
                <input type="text" id="nome" />
            </fieldset>
        </form>
    );
};
