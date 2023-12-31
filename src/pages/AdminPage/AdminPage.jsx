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
import {useCollectionAPI} from "../../hooks/useCollectionAPI";


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

// const data = [
//     {
//         id: '1',
//         title: 'For drones',
//         status: 'approved',
//         description: 'About gathering money for some brigade for drones that they need',
//         sum: 150000
//     },
//     {
//         id: '2',
//         title: 'For tanks',
//         status: 'pending',
//         description: 'About gathering money for some brigade for drones that they need',
//         sum: 250000
//     },
//     {
//         id: '3',
//         title: 'For planes',
//         status: 'closed',
//         description: 'About gathering money for some brigade for drones that they need',
//         sum: 350000
//     },
//     {
//         id: '4',
//         title: 'For ships',
//         status: 'pending',
//         description: 'About gathering money for some brigade for drones that they need About gathering money for some brigade for drones that they needAbout gathering money for some brigade for drones that they needrfdwf',
//         sum: 450000
//     },
//     {
//         id: '5',
//         title: 'For something',
//         status: 'approved',
//         description: 'About gathering money for some brigade for drones that they need',
//         sum: 550000
//     },
// ]

const AdminPage = () => {

    const {collectionPendingData: {data}, collectionStatus} = useCollectionAPI()
    const handleUpdate = (id, status) => {
        collectionStatus.mutate({
            status: status,
            id: id
        });
    }
    return (

        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell>Sum</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((collection) => (
                        <StyledTableRow key={collection.id}>
                            <StyledTableCell>{collection.title}</StyledTableCell>
                            <StyledTableCell>{collection.status.toUpperCase()}</StyledTableCell>

                            <StyledTableCell>{collection.sum ? collection.sum : "no info"}</StyledTableCell>
                            <StyledTableCell>
                                {collection.status === 'pending' &&
                                    <Button variant="contained" color="success" onClick={() => {
                                        handleUpdate(collection._id, "published")
                                    }}>
                                        Approve
                                    </Button>}
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button variant="contained" color="error" onClick={() => {
                                    handleUpdate(collection._id, "rejected")
                                }}>
                                    Reject
                                </Button>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AdminPage;
