import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import treatment from '../../../images/treatment.png';
import { Button, Typography } from '@mui/material';

const Treatment = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Grid container spacing={0.5}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ width: 400, height: 480 }}
                        src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box sx={{ m: 2 }}>
                        <Typography sx={{ mb: 8 }} variant='h4'>
                            Exceptional Dental <br /> Care, On Your Terms
                        </Typography>
                        <Typography sx={{ mb: 8, lineHeight: 2, color: 'text.secondary', width: 3 / 4 }} style={{ fontSize: 14, fontWeight: 300 }} variant='h6' >
                            It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of using Lorem Imsumis that it has a more-or-less normal distribution of letters, as apposed to using. This is the best place to get your treatment.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CD4CE' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Treatment;