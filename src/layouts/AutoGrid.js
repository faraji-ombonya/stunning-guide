import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Form from '../components/Form';


export default function AutoGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} direction={"column"}>

                <Grid item xs={8} xl={8} >
                    <Paper>
                        <Form />
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
}
