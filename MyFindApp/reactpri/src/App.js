import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar,  Typography, Box, Grid, CardActions, Card, CardMedia, 
CardContent, 
DialogTitle,
DialogContent,
DialogContentText,
Dialog, DialogActions,
TextField} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';


const useStyles = makeStyles((theme) => ({
	root:{
		flexGrow: 1
	},
	MenuButton:{
		marginRight: theme.spacing(1)
	},
	title:{
		flexGrow: 1
	},
	mainFeaturesPostContent:{
		position: 'relative',
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
	}
	
}))
const cards = [1,2,3,4,5,6,7,8,9];

function App(){
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [openreg, setOpenreg] = React.useState(false);
	const handleClickOpenReg = () => {
		setOpenreg(true);
	}
	const handleCloseReg = () => {
		setOpenreg(false);
	}
	const handleClickOpen = () => {
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
	}
	return(
		<>
		<AppBar position="maxWidth">
			<Container fixed>
				<Toolbar>
					
						
						<Router>
								<Navbar />
								<Switch>
								
								<Route exact path='/FAQ' component={FAQ} />
								<Route exact path='/Profile' component={Profile} />
								</Switch>
							</Router>
					
					<Typography variant='h5' className={classes.title} color='white'>GDE?</Typography>

					<Box mr={2}>
							<Button color="inherit" variant="outlined" onClick={handleClickOpen}>Войти</Button>

							<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
								<DialogTitle id='form-dialog-title'>Войти</DialogTitle>
								<DialogContent>
									<DialogContentText>Авторизоваться</DialogContentText>
									<TextField 
									   autoFocus
									   margin="dense"
									   id="name"
									   label="Email"
									   type="email"
									   fullWidth
									/>
									<TextField 
									   autoFocus
									   margin="dense"
									   id="Pass"
									   label="Password"
									   type="password"
									   fullWidth
									/>
									<DialogActions>
										<Button onClick={handleClose} color="primary">Войти</Button>
										<Button onClick={handleClose} color="primary">Отмена</Button>
									</DialogActions>
								</DialogContent>
							</Dialog>
						</Box>
						<Button color="secondary" variant="contained" onClick={handleClickOpenReg}>Регистрация</Button>
						<Dialog open={openreg} onClose={handleCloseReg} aria-labelledby='form-registration-title'>
								<DialogTitle id='form-registration-title'>Регистрация</DialogTitle>
								<DialogContent>
									<TextField 
									   autoFocus
									   margin="dense"
									   id="name"
									   label="Email"
									   type="email"
									   fullWidth
									/>
									
									<TextField 
									   autoFocus
									   margin="dense"
									   id="Pass"
									   label="Password"
									   type="password"
									   fullWidth
									/>
									<TextField 
									   autoFocus
									   margin="dense"
									   id="Pass"
									   label="Password"
									   type="password"
									   fullWidth
									/>
									<DialogActions>
										<Button onClick={handleCloseReg} color="primary">Зарегистрироваться</Button>
										<Button onClick={handleCloseReg} color="primary">Отмена</Button>
									</DialogActions>
								</DialogContent>
							</Dialog>
				</Toolbar>
			</Container>
		</AppBar>

	
			<div className={classes.mainContent}>
				<Container maxWidth="sm">
					<Typography variant='h2' align='center' color='textPrimary' gutterBottom>Приложение для поиска</Typography>
					<Typography variant='h5' align='center' color='secondary' paragraph>Приложение для поиска</Typography>
				</Container>
			</div>
			<div className={classes.mainButtons}>
				<Grid container spacing={2} justify='center'>
					<Grid item>
						<Button variant='outlined' color="primary">Разместить находку</Button>
						<Button variant='outlined' color="primary">Найти</Button>
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
export default App;
