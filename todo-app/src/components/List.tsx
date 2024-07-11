import Item from "./Item";



interface Props {
  tasks: string[];
}
export default function List({ tasks }: Props) {
  return (
    <>
      <ol>{tasks && tasks.map((task) => <Item text={task} />)}</ol>
    </>
  );
}
