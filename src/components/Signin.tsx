import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router';
import 'firebase/auth';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(8),
    },
    title: {
      paddingBottom: theme.spacing(5),
    },
  }),
);

const Signin: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const uiConfig: firebaseui.auth.Config = {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        const dest = redirectUrl || '/home';
        history.replace(dest);

        return false;
      },
    },
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography>ログイン/新規登録</Typography>
      </Grid>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Signin;
