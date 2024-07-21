export type Task = {
  id: number;
  task: string;
  done: boolean;
};

export default function Item(props: Task) {
  return <li key={props.id}>{props.task}</li>;
}
