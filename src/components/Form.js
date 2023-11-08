import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select';


export default function Form() {
    const [hasHeartDisease, setHasHeartDisease] = useState("2")
    const [showAlert, setShowAlert] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // save form data in state
    const [formData, setFormData] = useState({
        age: "",
        sex: "",
        cp: "",
        thal: "",
        restecg: "",
        ca: "",
    });

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

                handleClickOpen(true)
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.response)
                handleClickOpen(true)

            })

    }

    return (
        <Box sx={{ minWidth: 120 }} margin={2}>

            <Typography variant="h3" gutterBottom>
                Stunning Guide
            </Typography>

            <form onSubmit={handleSubmit}>

                <Stack spacing={2}>

                    <TextField
                        name='age'
                        id="age"
                        label="Age"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <FormControl>
                        <InputLabel id="sex-label">Sex</InputLabel>
                        <Select
                            name='sex'
                            labelId="sex-label"
                            id="sex"
                            value={formData['sex']}
                            label="Sex"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={0}>Female</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="cp-label">Chest Pain Type</InputLabel>
                        <Select
                            name='cp'
                            labelId="cp-label"
                            id="cp"
                            value={formData['cp']}
                            label="Sex"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Type 1</MenuItem>
                            <MenuItem value={1}>Type 2</MenuItem>
                            <MenuItem value={2}>Type 3</MenuItem>
                            <MenuItem value={3}>Type 4</MenuItem>
                        </Select>

                    </FormControl>


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

                    <FormControl>
                        <InputLabel id="restecg-label">Resting Electrorestecgrdiographic Results</InputLabel>
                        <Select
                            name='restecg'
                            labelId="restecg-label"
                            id="restecg"
                            value={formData['restecg']}
                            label="Resting Electrorestecgrdiographic Results"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                        </Select>
                    </FormControl>

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

                    <FormControl>
                        <InputLabel id="ca-label">Number of major vessels colored by flourosopy</InputLabel>
                        <Select
                            name='ca'
                            labelId="ca-label"
                            id="ca"
                            value={formData['ca']}
                            label="Sex"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="thal-label">Thal</InputLabel>
                        <Select
                            name='thal'
                            labelId="thal-label"
                            id="thal"
                            value={formData['thal']}
                            label="Sex"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Normal</MenuItem>
                            <MenuItem value={1}>Fixed Defect</MenuItem>
                            <MenuItem value={2}>Reversable Defect</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" type='submit'>Submit</Button>
                </Stack>

            </form>

            <AlertDialog
                open={open}
                handleClose={handleClose}
                handleClickOpen={handleClickOpen}
                hasHeartDisease={hasHeartDisease}
            />

        </Box>
    );
}

function AlertDialog({ open, handleClose, handleClickOpen, hasHeartDisease }) {
    let response = '';

    switch (hasHeartDisease) {
        case 0:
            response = "You do not have a heart disease"
            break

        case 1:
            response = "You have heart disease"
            break;

        default:
            break;
    }

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Check Complete!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {response}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}