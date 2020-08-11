import { createContext } from 'react';
import firebase from 'firebase/app';

type UserContextValue = {
  user: firebase.User | null;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
});
