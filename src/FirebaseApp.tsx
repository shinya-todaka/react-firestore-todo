import React, { FC, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import writeUser from 'services/write-user';
import 'firebase/auth';
import 'firebase/firestore';
import { UserContext } from 'contexts';

const FirebaseApp: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const unsubscribe = firebase.auth().onAuthStateChanged(async (authUser) => {
    if (authUser) {
      await writeUser(authUser.uid);
      setUser(authUser);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    return unsubscribe;
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default FirebaseApp;
