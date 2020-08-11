import firebase from 'firebase/app';
import 'firebase/firestore';

const createTask = async (uid: string, title: string): Promise<void> => {
  const db = firebase.firestore();
  const taskCollectionReference = db
    .collection('users')
    .doc(uid)
    .collection('tasks');
  await taskCollectionReference.add({
    title,
    isDone: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export default createTask;
