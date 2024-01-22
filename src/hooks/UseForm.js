import { useState } from "react"

export const useForm = (initialForm) => {
    const [formState, setFormState] = useState(initialForm)


    const onInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormState({
         ...formState,
            [name]: value
        })
    }

    const onResetChange = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetChange,
    }
}