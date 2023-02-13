import {TextInput} from "../TextInput/TextInput";
import {useForm} from "./talons/useForm";
import defaultClasses from './Form.module.scss';

const Form = () => {
    const talonsProps = useForm();
    const {result,onSubmitForm} = talonsProps;

    return (
        <div>
            <TextInput onSubmitForm={onSubmitForm}/>
            <div>
                <h5>Result:</h5>
                <span className={defaultClasses.result}>{result}</span>
            </div>
        </div>
    )
}

export default Form;