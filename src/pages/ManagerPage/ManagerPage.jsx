import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const data = [
    {
        id: '1',
        title: 'For drones',
        link: 'approved',
        description: 'About gathering money for some brigade for drones that they need',
        sum: 150000
    },
    {
        id: '2',
        title: 'For tanks',
        link: 'pending',
        description: 'About gathering money for some brigade for drones that they need',
        sum: 250000
    },
    {
        id: '3',
        title: 'For planes',
        link: 'closed',
        description: 'About gathering money for some brigade for drones that they need',
        sum: 350000
    },
    {
        id: '4',
        title: 'For ships',
        link: 'pending',
        description: 'About gathering money for some brigade for drones that they need About gathering money for some brigade for drones that they needAbout gathering money for some brigade for drones that they needrfdwf',
        sum: 450000
    },
    {
        id: '6550a96b12d2ec3e5369551a',
        title: 'For something',
        link: 'approved',
        description: 'About gathering money for some brigade for drones that they need',
        sum: 550000
    },
]

const ManagerPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Box sx={{
                width:'100%',
                display:'flex',
                justifyContent:'space-between',
                margin:'30px 0',
                padding:'0 50px'
            }}>
                <Typography>
                    FundRaising
                </Typography>
            <Button variant="contained" color="success"
            onClick={ () => {
                navigate('/manager/create');
            }
            }
            >
                        Create
            </Button>
            </Box>

            <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Link</StyledTableCell>
                        <StyledTableCell>Description</StyledTableCell>
                        <StyledTableCell>Sum</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((collection) => (
                        <StyledTableRow key={collection.id}>
                            <StyledTableCell sx={{fontWeight: '700'}}>
                                {collection.id}
                            </StyledTableCell>
                            <StyledTableCell>{collection.title}</StyledTableCell>
                            <StyledTableCell>{collection.link.toUpperCase()}</StyledTableCell>
                            <StyledTableCell
                                sx={{maxWidth: 300}}>{collection.description.slice(0, 200)}</StyledTableCell>
                            <StyledTableCell>{collection.sum}</StyledTableCell>
                            <StyledTableCell>
                                <Button variant="contained" color="success"
                                onClick={ () => {
                                    navigate(`/manager/edit/${collection.id}`);
                                }}
                                >
                                    Edit
                                </Button>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button variant="contained" color="error">
                                    Delete
                                </Button>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default ManagerPage;
