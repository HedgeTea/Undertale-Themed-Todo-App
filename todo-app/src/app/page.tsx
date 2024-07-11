"use client";
import { FormEvent, SyntheticEvent, use, useState } from "react";
import Form from "@/components/Form";
import List from "@/components/List";
import Item from "@/components/Item";

export interface Task {
  id: number;
  text: String;
  done: boolean;
}

export default function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    console.log(task, tasks);
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
      setTask("");
    }
  };

  return (
    <>
      <Form task={task} setTask={setTask} handleAdd={handleAdd} />
      {tasks.map((t) => (
        <li>{t.text}</li>
      ))}
    </>
  );
}
