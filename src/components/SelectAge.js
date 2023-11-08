import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAge() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="age">Age</InputLabel>
                <Select
                    labelId="age"
                    id="age"
                    value={age}
                    label="age"
                    onChange={handleChange}
                    margin='2'
                >
                    <MenuItem value={1}>teen</MenuItem>
                    <MenuItem value={0}>adult</MenuItem>
                </Select>


                <InputLabel id="age">Age</InputLabel>
                <Select
                    labelId="age"
                    id="age"
                    value={age}
                    label="age"
                    onChange={handleChange}
                    margin='2'
                >
                    <MenuItem value={1}>teen</MenuItem>
                    <MenuItem value={0}>adult</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
