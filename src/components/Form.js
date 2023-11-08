import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function Form() {

    // save form data in state
    const [formData, setFormData] = useState({
        age: "",
        cp: "",
    });

    // handle change
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formData)
        console.log("Submited!")


        axios.post("http://localhost:8000/predict/", formData)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                // console.log(error)

                console.log(error.code)
                console.log(error.response)
                console.log("An error occured")
            })

    }

    return (
        <Box sx={{ minWidth: 120 }} margin={2}>

            <form onSubmit={handleSubmit}>
                <FormControl fullWidth >

                    <TextField
                        name='age'
                        id="age"
                        label="Age"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='sex'
                        id="sex"
                        label="Sex"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='cp'
                        id="cp"
                        label="Chest Pain"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='trestbps'
                        id="trestbps"
                        label="trestbps"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='chol'
                        id="chol"
                        label="Cholesterol"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='fbs'
                        id="fbs"
                        label="fbs"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='restecg'
                        id="restecg"
                        label="restecg"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='thalach'
                        id="thalach"
                        label="thalach"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='exang'
                        id="exang"
                        label="exang"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='oldpeak'
                        id="oldpeak"
                        label="oldpeak"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='slope'
                        id="slope"
                        label="slope"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='ca'
                        id="ca"
                        label="ca"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <TextField
                        name='thal'
                        id="thal"
                        label="thal"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <button type='submit'>Submit</button>

                </FormControl>

            </form>


        </Box>
    );
}
