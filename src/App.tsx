import React, { FC, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from 'components/common/Header';
import Home from 'components/Home';
import Signin from 'components/Signin';
import { UserContext } from 'contexts';

const App: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route path="/" render={() => <Home user={user} />} exact />
        {!user && <Route path="/signin" component={Signin} />}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
