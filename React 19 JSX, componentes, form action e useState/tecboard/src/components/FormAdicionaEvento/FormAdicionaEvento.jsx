import FormBotao from "../FormBotao/FormBotao";
import FormFieldset from "../FormFieldset/FormFieldset";
import FormH2Titulo from "../FormH2Titulo/FormH2Titulo";
import FormInput from "../FormInput/FormInput";
import FormLabel from "../FormLabel/FormLabel";
import FormSelect from "../FormSelect/FormSelect";
import styles from './FormAdicionaEvento.module.css';

export default function FormAdicionaEvento() {
    return (
        <form className={styles.formStilos}>
            <FormH2Titulo>Preencha para criar um Evento:</FormH2Titulo>
            <div className={styles.formCamposContainer}>
                <FormFieldset>
                    <FormLabel htmlFor="nomeEvento">Qual o nome do Evento?</FormLabel>
                    <FormInput type="text" id="nomeEvento" placeholder='Ex: Summer Dev Hits' name="nomeEvento" />
                </FormFieldset>
                <FormFieldset>
                    <FormLabel htmlFor="dataEvento">Data do Evento?</FormLabel>
                    <FormInput type="date" id="dataEvento" name="eventoData" />
                </FormFieldset>
                <FormFieldset>
                    <FormLabel></FormLabel>
                    <FormSelect />
                </FormFieldset>
            </div>
            <div className={styles.formDivContainerBotao}>
                <FormBotao>Criar Evento</FormBotao>
            </div>
        </form>
    );
};


