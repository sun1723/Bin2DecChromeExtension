import {TextInput} from "../TextInput/TextInput";
import {useForm} from "./talons/useForm";
import  './Form.scss';

const Form = () => {
    const talonsProps = useForm();
    const {result,onSubmitForm} = talonsProps;

    return (
        <div>
            <TextInput onSubmitForm={onSubmitForm}/>
            <div  className="result">
                <h1>Result: {result}</h1>
            </div>
        </div>
    )
}

export default Form;