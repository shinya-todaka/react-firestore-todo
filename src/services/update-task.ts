import firebase from 'firebase/app';
import 'firebase/firestore';
import { Task } from 'services/models/Task';

const updateTask = async (uid: string, task: Task): Promise<void> => {
  const db = firebase.firestore();
  if (task.id) {
    const taskReference = db
      .collection('users')
      .doc(uid)
      .collection('tasks')
      .doc(task.id);
    await taskReference.update({ isDone: !task.isDone });
  }
};

export default updateTask;
