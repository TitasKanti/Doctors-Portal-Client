import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container, Box, Icon } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';


const bannerbg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={{ bannerbg }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography sx={{ mb: 4, fontWeight: 500, color: 'gray' }} variant='h3'>
                            Your New Smile <br /> Starts here
                        </Typography>
                        <Typography sx={{ mb: 4, lineHeight: 2, color: 'text.secondary' }} style={{ fontSize: 14, fontWeight: 300 }} variant='h6' >
                            It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of using Lorem Imsumis that it has a more-or-less normal distribution of letters.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CD4CE' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ ...verticalCenter }}>
                    <img style={{ width: '400px' }} src={chair} alt="chair" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;