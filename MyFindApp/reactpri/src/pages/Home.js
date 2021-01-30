import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container,  Typography, Grid, CardActions, Card, CardMedia, 
CardContent, ButtonGroup,} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';




const useStyles = makeStyles((theme) => ({
	root:{
		flexGrow: 1
	},
	MainButton:{
		marginRight: theme.spacing(1)
	},
	title:{
		flexGrow: 1,
		
	},
	mainFeaturesPostContent:{
		position: 'static',
		padding: theme.spacing(6),
		marginTop: theme.spacing(8)
	},
	CardMedia: {
		paddingTop: '66.25%'
	},
	cardContent: {
		flexGrow: 1
	},
	cardGrid:{
		marginTop: theme.spacing(4)
	},

	
}))
const cards = [1,2,3,4,5,6,7,8,9];

export default function Home() {
    const classes = useStyles();
    return(
        
        <>

<div className={classes.mainFeaturesPostContent}>
				<Container maxWidth="sm">
					<Typography variant='h2' align='center' color='textPrimary' gutterBottom>Приложение для поиска</Typography>
				</Container>
			</div>
			<div className={classes.mainButtons}>
				<Grid container spacing={2} justify='center'>
					<Grid item>
					<ButtonGroup color="primary" aria-label="outlined primary button group">
						<Button>Разместить</Button>
						<Button>Найти</Button>
					</ButtonGroup>
					</Grid>

				</Grid>
			</div>
			<Container className={classes.cardGrid} maxWidth='md'>
				<Grid container spacing={4}>
					{cards.map((card) =>(
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.CardMedia}
									image="https://i.mycdn.me/videoPreview?id=892693121675&type=32&idx=7&tkn=SmXCefssga_sFbgI8nNIW2L4uBk&fn=external_8"
									title="Image title"
								/>
								<CardContent className='classes.cardContent '>
									<Typography variant='h5' gutterBottom>
										Предмет
									</Typography>
									<Typography>
										Описание данного предмета
									</Typography>
									
								</CardContent>
								<CardActions>
										<Button size='small' color='primary'>
											Перейти
										</Button>

										<LayerIcon />
											<PlayCircleFilledIcon />
									</CardActions>
								
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
        </>
    );
}