import React from 'react';
import ToDo from 'containers/ToDo';
import firebase from 'firebase/app';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const Home: React.FC<{ user: firebase.User | null }> = ({ user }) => {
  return (
    <Container maxWidth="sm">
      {user ? <ToDo uid={user.uid} /> : <Typography>plese login!</Typography>}
    </Container>
  );
};

export default Home;
