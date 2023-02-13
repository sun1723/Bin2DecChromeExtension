import {TextInput} from "../TextInput/TextInput";
import {useForm} from "./talons/useForm";

const Form = () => {
    const talonsProps = useForm();
    const {result,onSubmitForm} = talonsProps;

    return (
        <div>
            <TextInput onSubmitForm={onSubmitForm}/>
            <div>
                <h5>Result:</h5>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Form