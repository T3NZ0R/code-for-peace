import { Button, Card, CardMedia, Grid, Typography } from "@mui/material"



const Donate = ({item}) => {

	return (
		<Grid sx={{
			margin:'0 auto',
			display:'flex',
			flexDirection:'row',
			justifyContent:'space-around',
			width:'50%',
			border:'1px solid black',
		}}>
			<Card>
				<CardMedia
					sx={{borderRadius:'15px'}}
					component="img"
					height="140"
					image={`${item.img}`}
					alt="Your Image Alt Text"
				/>
			</Card>

			<Grid
				sx={{
					padding: '0 30px'
				}}
			>
				<Typography variant="h2" sx={{fontSize:'20px', fontFamily:'popins'}}>
					{item.title}
				</Typography>
				<Grid>
					{item.description}
				</Grid>
				<Button variant={'contained'}>
					{item.link}
				</Button>
			</Grid>
		</Grid>
	)
}

export default Donate
