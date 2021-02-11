import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Dialog,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Messages from "./pages/Messages";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  MainButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPostContent: {
    position: "static",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  CardMedia: {
    paddingTop: "66.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openreg, setOpenreg] = React.useState(false);
  const handleClickOpenReg = () => {
    setOpenreg(true);
  };
  const handleCloseReg = () => {
    setOpenreg(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Router>
        <AppBar position="maxWidth">
          <Container fixed>
            <Toolbar>
              <Navbar />

              <Typography variant="h5" className={classes.title} color="white">
                GDE?
              </Typography>

              <Box mr={2}>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  Войти
                </Button>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Войти</DialogTitle>
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
                      <Button onClick={handleClose} color="primary">
                        Войти
                      </Button>
                      <Button onClick={handleClose} color="primary">
                        Отмена
                      </Button>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
              </Box>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleClickOpenReg}
              >
                Регистрация
              </Button>
              <Dialog
                open={openreg}
                onClose={handleCloseReg}
                aria-labelledby="form-registration-title"
              >
                <DialogTitle id="form-registration-title">
                  Регистрация
                </DialogTitle>
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
                    <Button onClick={handleCloseReg} color="primary">
                      Зарегистрироваться
                    </Button>
                    <Button onClick={handleCloseReg} color="primary">
                      Отмена
                    </Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>
            </Toolbar>
          </Container>
        </AppBar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Support" component={Support} />
          <Route exact path="/Message" component={Messages} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
