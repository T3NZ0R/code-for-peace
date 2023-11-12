import {Box, Button, Card, CardMedia, Grid,  Typography} from "@mui/material"
import {styled} from "@mui/material/styles";
import {useImageAPI} from "../hooks/useImageAPI";
import mockPhoto from "../assets/img.png"

const Donate = ({item}) => {
    const {imageData:{data}} = useImageAPI("c10783aef7badc3aa479f49f698d84994.png")

    return (
        <BoxWrap>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={mockPhoto}
                    alt="Your Image Alt Text"
                />
            </Card>

            <BoxTextInfo>
                <Typography variant="h2" sx={{fontSize: '20px', fontFamily: 'popins'}}>
                    {item?.title}
                </Typography>
                <Grid>
                    {item?.description}
                </Grid>
                <Button variant={'contained'} sx={{width: "fit-content"}}>
                    {item?.link}
                </Button>
            </BoxTextInfo>

        </BoxWrap>
    )
}

export default Donate

const BoxWrap = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 30px;
  border: #1976d2 4px solid;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
`;

const BoxTextInfo = styled(Box)`
 display: flex;
  flex-direction: column;
  gap: 10px;
`;
