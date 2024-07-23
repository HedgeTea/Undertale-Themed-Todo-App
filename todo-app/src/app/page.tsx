"use client";
import { SyntheticEvent, useState } from "react";
import { Task } from "@/components/Item";
import Form from "@/components/Form";
import Item from "@/components/Item";
import Styles from "./page.module.css";


export default function ToDo() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(0);
  const adder = (e: SyntheticEvent) => {
    e.preventDefault();
    if (task) {
      setTasks((tasks) => [...tasks, { id: count, task: task, done: false, remover: remover, editor: editor }]);
      setCount((count) => count + 1);
      setTask((_) => "");
    }
  };

  const remover = (id: number) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const editor = (e: SyntheticEvent, newTask: string, id: number) => {
    e.preventDefault();
    setTasks(tasks.map((t) => (t.id == id ? { ...t, task: newTask } : t)));
  };
  return (
    <>
      <h1 className={Styles.header}>Stop Procrastinating</h1>
      <Form adder={adder} setter={setTask} task={task}></Form>
      <ul className={Styles.list}>
        {tasks.map((t) => {
          // console.log(t.id);
          return <Item task={t.task} id={t.id} done={t.done} remover={remover} editor={editor} />;
        })}
      </ul>
    </>
  );
}
