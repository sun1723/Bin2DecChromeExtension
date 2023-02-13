import { Form, Input } from 'informed';
import {useTextInput} from "./talons/useTextInput";

export interface textInputInterface {
    onSubmitForm: (formState: any) => void
}

export const TextInput = (props: textInputInterface) => {
    const talonProps = useTextInput(props);
    const {onSubmitForm,validateInput} =  talonProps

    return (
        <Form id="binary"  onSubmit={onSubmitForm} >
            <Input name="binary" label="Binary:" validateOn='blur' validate={validateInput}/>
            <button type="submit">Convert</button>
        </Form>
    )
}