import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken',
    marginTop: 150,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box sx={{ m: 2 }}>
                        <Typography sx={{ mb: 3 }} variant='h6' style={{ color: '#5CD4CE' }}>
                            APPOINTMENT
                        </Typography>
                        <Typography sx={{ mb: 3 }} variant='h4' style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ mb: 3 }} variant='h6' style={{ color: 'white', fontSize: 14, fontWeight: 300 }} >
                            Make your appointment fast to meet the best doctor in your convenient time.
                            <br />
                            We are waiting for you. Have a great service from us.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CD4CE' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;