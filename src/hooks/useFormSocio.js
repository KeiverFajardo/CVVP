import { useState } from "react"
import {Form} from 'react-bootstrap'
import { helpHttp } from "../helpers/helpHttp";

export const useFormSocio = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setForm({
            ...form,
            [name]:value,

        });
    };

    const handleBlur = (e) => {
        /* handleChange(e);
        setErrors(validateForm(form)); */
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            alert("Enviando Formulario");
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/ing.kfajardo@gmail.com", {
                body: form,
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
            })
            .then((res) => {
                setLoading(false);
                setResponse(true);
                setForm(initialForm);
                console.log("enviado el form a un correo");
                setTimeout(() => setResponse(false), 4000);
            });
        } else {
            return;
        }
    };

  return {
   form,
   errors,
   loading,
   response,
   handleBlur,
   handleChange,
   handleSubmit,
  }
}

 