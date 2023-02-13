import { Form, Input } from 'informed';
import {useTextInput} from "./talons/useTextInput";
import defaultClasses from './TextInput.module.scss'
export interface textInputInterface {
    onSubmitForm: (formState: any) => void
}

export const TextInput = (props: textInputInterface) => {
    const talonProps = useTextInput(props);
    const {onSubmitForm,validateInput} =  talonProps

    return (
        <Form id="binary"  onSubmit={onSubmitForm} className={defaultClasses.form}>
            <Input name="binary" label="Please Enter Binary Number:" validateOn='blur' validate={validateInput}/>
            <button type="submit">Convert</button>
        </Form>
    )
}