import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import {
  Toolbar,
  Typography,
  makeStyles,
  Container,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.light,
  },
  title: {
    flexGrow: 1,
  },
  createTODOButton: {
    flexGrow: 1,
  },
}));

const Header: React.FC<{ user: firebase.User | null }> = ({ user }) => {
  const classes = useStyles();
  const signout = () => {
    firebase.auth().signOut();
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TODO
          </Typography>
          {user ? (
            <Button color="inherit" onClick={signout}>
              signout
            </Button>
          ) : (
            <Button color="inherit" to="/signin" component={Link}>
              signin
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
