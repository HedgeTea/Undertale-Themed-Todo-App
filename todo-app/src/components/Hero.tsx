type Counter = {
  completed: number;
  total: number;
};

export default function Hero(prop: Counter) {
  return (
    <section>
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>
        {prop.completed}/{prop.total}
      </div>
    </section>
  );
}
