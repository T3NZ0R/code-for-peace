import React from 'react';
import { Box } from '@mui/material'
import SwiperSlice from "../../components/SwiperSlice";


const HomePage = () => {
    return (
        <>
            <Box sx={{
                padding:"20vh 0",
                border:'1px solid black',
                display:'flex',
            }}>
                <SwiperSlice/>
            </Box>
        </>
    );
};

export default HomePage;
