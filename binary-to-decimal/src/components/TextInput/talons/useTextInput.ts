import {useFormState} from "informed";
import {textInputInterface} from "../TextInput";

export const useTextInput = (props: textInputInterface) => {
    const {errors} = useFormState();
    const displayMessage = !!errors;

    const message = errors?.binary;
    const validateInput = (value:any) => {
        if(/[^01]/.test(value)){
            return "Please Enter Binary Number"
        }

        return undefined;
    }


    return {
        validateInput,
        displayMessage,
        errors,
        message,
        ...props
    }
}