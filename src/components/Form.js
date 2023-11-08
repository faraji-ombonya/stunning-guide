import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import axios from 'axios';
import { dividerClasses } from '@mui/material';





export default function Form() {
    const [hasHeartDisease, setHasHeartDisease] = useState("2")
    const [showAlert, setShowAlert] = useState(false)

    // save form data in state
    const [formData, setFormData] = useState({});

    // handle change
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })

        console.log(formData)
    };

    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formData)
        console.log("Submited!")


        axios.post("http://localhost:8000/predict/", formData)
            .then((response) => {
                console.log(response.data.has_heart_disease)
                setHasHeartDisease(response.data.has_heart_disease)
                setShowAlert(true)
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

                    <Stack spacing={2}>
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
                            label="Chest Pain Type"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='trestbps'
                            id="trestbps"
                            label="Resting Blood Pressure"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='chol'
                            id="chol"
                            label="Serum Cholestoral in mg/dl"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='fbs'
                            id="fbs"
                            label="Fasting Blood Sugar > 120 mg/dl"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='restecg'
                            id="restecg"
                            label="Resting Electrocardiographic Results (values 0,1,2)"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='thalach'
                            id="thalach"
                            label="Maximum Heart Rate Achieved"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='exang'
                            id="exang"
                            label="Exercise Induced Angina"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='oldpeak'
                            id="oldpeak"
                            label="Oldpeak = ST depression induced by exercise relative to rest"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='slope'
                            id="slope"
                            label="the slope of the peak exercise ST segment"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='ca'
                            id="ca"
                            label="Number of major vessels (0-3) colored by flourosopy"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <TextField
                            name='thal'
                            id="thal"
                            label="thal: 0 = normal; 1 = fixed defect; 2 = reversable defect"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <Button variant="contained" type='submit'>Submit</Button>
                    </Stack>
                </FormControl>
            </form>


            <CustomAlert showAlert={showAlert} hasHeartDisease={hasHeartDisease} />


        </Box>
    );
}


function CustomAlert({ showAlert, hasHeartDisease }) {

    let response = '';
    let severity = '';

    switch (hasHeartDisease) {
        case 0:
            response = "You do not have a heart disease"
            severity = "success"
            break

        case 1:
            response = "You have heart disease"
            severity = "warning"
            break;

        default:
            break;
    }

    return (
        <div>
            {showAlert && (
                <Alert severity={severity} >
                    <AlertTitle>Info</AlertTitle>
                    <strong>{response}</strong>
                </Alert>
            )}
        </div>
    )
}