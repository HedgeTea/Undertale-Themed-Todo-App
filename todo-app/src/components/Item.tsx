import { SyntheticEvent, useState } from "react";
import Styles from "../app/page.module.css";
import pen from "../assets/pen.png";
import flag from "../assets/flag.png";
export type Task = {
  id: number;
  task: string;
  done: boolean;
  remover: (e: number) => void;
  editor: (e: SyntheticEvent, newTask: string, id: number) => void;
};

export default function Item(props: Task) {
  const [editing, setEditing] = useState<boolean>(() => false);
  const [editedTask, setEditedTask] = useState<string>(props.task);

  return (
    <div key={props.id.toString() + "wrapper"} className={Styles.item}>
      <li className={Styles.todo} key={props.id}>
        {editing ? (
          <form
            className="editForm"
            key={props.id + "edit"}
            onSubmit={(e) => {
              props.editor(e, editedTask, props.id);
              setEditing(false);
            }}
          >
            <input key={props.id + "edit"} className="editBox" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />{" "}
          </form>
        ) : (
          props.task
        )}
      </li>
      <div key={props.id.toString() + "options"} className={Styles.options}>
        <img key={props.id.toString() + "flag"} className={Styles.modifiers} src={flag.src} alt="" onClick={() => props.remover(props.id)} />
        <img key={props.id.toString() + "pen"} className={Styles.modifiers} src={pen.src} alt="" onClick={() => setEditing((editing) => !editing)} />
      </div>
    </div>
  );
}
