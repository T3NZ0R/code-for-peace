import React from 'react';
import { Box } from '@mui/material'
import SwiperSlice from "../../components/SwiperSlice";


const HomePage = () => {
    return (
        <>
            <Box sx={{
                display:'flex',
            }}>
                <SwiperSlice/>
            </Box>
        </>
    );
};

export default HomePage;
