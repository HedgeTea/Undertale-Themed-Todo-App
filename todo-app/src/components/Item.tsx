interface Props {
  id: number;
  text: String;
  done: boolean;
}

export default function Item({ text }: Props): JSX.Element {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
