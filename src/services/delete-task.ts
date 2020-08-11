import firebase from 'firebase/app';
import 'firebase/firestore';
import { Task } from './models/Task';

const deleteTask = async (uid: string, task: Task): Promise<void> => {
  const db = firebase.firestore();
  const taskReference = db
    .collection('users')
    .doc(uid)
    .collection('tasks')
    .doc(task.id);
  await taskReference.delete();
};

export default deleteTask;
