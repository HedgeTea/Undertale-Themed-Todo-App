import { Dispatch, FormEvent, SetStateAction, SyntheticEvent } from "react";

interface Props {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

export default function Form({ task, setTask, handleAdd }: Props) {
  return (
    <form className="form" onSubmit={(e) => handleAdd(e)}>
      <label htmlFor="todo">
        Nice:
        <input type="text" name="todo" id="todo" onChange={(e) => {console.log(e.target.value);setTask(e.target.value)}} placeholder="Write your next task" />
      </label>
      <button>Submit</button>
    </form>
  );
}
