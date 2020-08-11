import { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Task } from 'services/models/Task';

type TasksOptions = {
  uid: string;
  limit?: number;
};

const useTasks = ({ uid, limit = 20 }: TasksOptions) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const optionsRef = useRef({ uid, limit });

  useEffect(() => {
    const db = firebase.firestore();

    const query = db
      .collection('users')
      .doc(optionsRef.current.uid)
      .collection('tasks')
      .orderBy('createdAt')
      .limit(optionsRef.current.limit);

    const unsubscribe = query.onSnapshot((snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        ...(doc.data() as Task),
        id: doc.id,
      }));
      setTasks(tasksData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { tasks };
};

export default useTasks;
