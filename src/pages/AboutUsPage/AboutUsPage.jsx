import React from 'react';
import {Grid, Typography} from '@mui/material';
const AboutUsPage = () => {
    return (
        <Grid
            container
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            sx={{
                width: '50%',
                margin: '0 25%',
                padding: '20px',
            }}
        >
            <Typography variant="h4" align="center" sx={{marginBottom:'20px'}}>
                About Us
            </Typography>

            <Typography variant="body1" align="justify" paragraph>
                Welcome to KindFlow, your personal haven for kindness and generosity!
            </Typography>

            <Typography component="div">
                <Typography component="div">
                    <strong>Who we are:</strong>
                </Typography>
                <Typography component="ul">
                    <li>We are the KindFlow team, a group of enthusiasts united by the common goal of making the world a better place.</li>
                    <li>We believe in the power of kindness and helping each other, and that's why we've created this space for those who want to join us in creating positive change.</li>
                </Typography>
            </Typography>

            <Typography component="div">
                <Typography component="div">
                    <strong>Main Points: </strong>
                </Typography>
                <Typography component="ul">
                    <li>Accessibility: We make good available to everyone.</li>
                    <li>Transparency: We provide clear information about each project and contribution.</li>
                    <li>Community: Uniting people who want to do good together.</li>
                </Typography>
            </Typography>

            <Typography variant="body1" align="justify" paragraph sx={{marginTop: '20px'}}>
                Join us at KindFlow and help make waves that change the world. Thank you for choosing to be part of our community of goodness!
            </Typography>


        </Grid>
    );
};

export default AboutUsPage;
