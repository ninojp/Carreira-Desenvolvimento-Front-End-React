import FormBotao from "../FormBotao/FormBotao";
import FormFieldset from "../FormFieldset/FormFieldset";
import FormH2Titulo from "../FormH2Titulo/FormH2Titulo";
import FormInput from "../FormInput/FormInput";
import FormLabel from "../FormLabel/FormLabel";
import FormSelect from "../FormSelect/FormSelect";
import styles from './FormAdicionaEvento.module.css';

export default function FormAdicionaEvento({ temas, aoSubmeter }) {
    function aoFormSubmetido(formData) {
        console.log('aoFormSubmetido(): Criar novo envento...', formData);
        const evento = {
            capa: formData.get('imgCapaEvento'),
            tema: temas.find(item => item.id == formData.get("eventoTema")),
            // tema: temas.find(function (item) {
            //     return item.id == formData.get('eventoTema')
            // }),
            data: new Date(formData.get('eventoData')),
            titulo: formData.get('nomeEvento')
        }
        aoSubmeter(evento);
        
    }
    //========================================================================
    return (
        <form className={styles.formStilos} action={aoFormSubmetido}>
            <FormH2Titulo>Preencha para criar um Evento:</FormH2Titulo>
            <div className={styles.formCamposContainer}>
                <FormFieldset>
                    <FormLabel htmlFor="nomeEvento">Qual o nome do Evento?</FormLabel>
                    <FormInput type="text" id="nomeEvento" placeholder='Ex: Summer Dev Hits' name="nomeEvento" />
                </FormFieldset>
                <FormFieldset>
                    <FormLabel htmlFor="imgCapaEvento">Qual o endereço da Imagem?</FormLabel>
                    <FormInput type="text" id="imgCapaEvento" placeholder='http://...' name="imgCapaEvento" />
                </FormFieldset>
                <FormFieldset>
                    <FormLabel htmlFor="dataEvento">Data do Evento?</FormLabel>
                    <FormInput type="date" id="dataEvento" name="eventoData" />
                </FormFieldset>
                <FormFieldset>
                    <FormLabel htmlFor='temaEvento'>Tema do Evento</FormLabel>
                    <FormSelect id='temaEvento' name='eventoTema' itens={temas} />
                </FormFieldset>
            </div>
            <div className={styles.formDivContainerBotao}>
                <FormBotao>Criar Evento</FormBotao>
            </div>
        </form>
    );
};


