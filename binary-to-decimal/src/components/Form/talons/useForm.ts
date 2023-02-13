import {useFormState} from 'informed';
import {useCallback, useState} from "react";
export const useForm = () => {
    const formState = useFormState();

    const [result,setResult] = useState(0)

    const onSubmitForm = useCallback((formState:any) => {

        const {binary} = formState?.values;
        if(!binary)
            return
            // @ts-ignore
        const decimal = parseInt(binary, 2);
        console.log(decimal)
        setResult(decimal)

    },[]
)
    return {
        onSubmitForm,
        result
    }
}