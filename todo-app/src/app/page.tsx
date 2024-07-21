"use client";
import { SyntheticEvent, useState } from "react";
import { Task } from "@/components/Item";
import Form from "@/components/Form";
import Item from "@/components/Item";
import Styles from "./page.module.css";
import pen from "../assets/pen.png";
import flag from "../assets/flag.png";

export default function ToDo() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(0);
  const adder = (e: SyntheticEvent) => {
    e.preventDefault();
    if (task) {
      setTasks((tasks) => [...tasks, { id: count, task: task, done: false }]);
      setCount((count) => count + 1);
    }
  };

  const remover = (id: number) => {
    setTasks((tasks) => tasks.filter((t) => t.id != id));
  };

  return (
    <>
      <h1 className={Styles.header}>Stop Procrastinating</h1>
      <Form adder={adder} setter={setTask}></Form>
      <ul className={Styles.list}>
        {tasks.map((t) => {
          console.log(t.id);
          return (
            <div key={t.id.toString() + "wrapper"} className={Styles.item}>
              <li className={Styles.todo} key={t.id}>
                {t.task}
              </li>
              <div key={t.id.toString() + "options"} className={Styles.options}>
                <img key={t.id.toString() + "flag"} className={Styles.modifiers} src={flag.src} alt="" onClick={() => remover(t.id)} />
                <img key={t.id.toString() + "pen"} className={Styles.modifiers} src={pen.src} alt="" />
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}
