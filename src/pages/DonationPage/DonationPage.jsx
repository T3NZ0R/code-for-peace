import {Box, InputAdornment, Pagination, Stack, TextField, Typography} from "@mui/material"
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {styled} from "@mui/material/styles";
import Donate from "../../components/Donate";
import {useCollectionAPI} from "../../hooks/useCollectionAPI";


const DonationPage = () => {

    const[page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const {collectionData: {data}} = useCollectionAPI({page: page});


    const [filterName, setFilterName] = useState('');

    const handleFilterName = (event) => {
        setFilterName(event.target.value);
    };

    return (
        <BoxMain>
            <StyledBox>
                <Typography variant={'h1'}>Fundraising</Typography>
                <TextField

                    size="small"
                    value={filterName}
                    onChange={handleFilterName}
                    placeholder={'search'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{
                                    cursor: 'pointer'
                                }} fontSize="large" color="primary"/>
                            </InputAdornment>
                        ),
                    }}
                />
            </StyledBox>
            <BoxWrap>
                {data ? data.map((item) => (<Donate key={item._id} item={item}/>)) : null}
            </BoxWrap>

            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" page={page} onChange={handleChange}/>
            </Stack>
        </BoxMain>
    )
}

export default DonationPage;

const StyledBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
`;


const BoxWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const BoxMain = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
