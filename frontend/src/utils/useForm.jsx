import React, { useState } from 'react';

const useForm = (callback) => {

    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {

        event.persist();

        setFormValues({...formValues, [event.target.name]: event.target.value})

    }

    const handleSubmit = (event) => {

        event.preventDefault ();

    }

    return {formValues, handleChange, handleSubmit}
}

export default useForm;