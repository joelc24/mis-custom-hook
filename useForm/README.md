
# useForm Hook

Ejemplo de uso de useForm.

```
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
    const [ formValues, handleInputChange, reset ] = useForm(initialValues)

```