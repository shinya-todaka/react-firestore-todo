import firebase from 'firebase/app';
import 'firebase/firestore';

const writeUser = async (uid: string): Promise<void> => {
  const db = firebase.firestore();
  const userReference = db.collection('users').doc(uid);
  const userDoc = await userReference.get();

  if (!userDoc.exists) {
    await userReference.set({});
  }
};

export default writeUser;
