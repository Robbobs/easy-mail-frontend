import Table, { Config } from "./components/Table";

interface Fruit {
  name: string;
  color: string;
  score: number;
}

function App() {
  const data: Fruit[] = [
    { name: "Pêra", color: "bg-lime-200", score: 1 },
    { name: "Uva", color: "bg-violet-600", score: 2 },
    { name: "Maçã", color: "bg-red-600", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 4 },
    { name: "Manga", color: "bg-amber-600", score: 5 },
  ];

  const config: Config<Fruit>[] = [
    {
      label: "Fruits",
      render: (fruit: Fruit) => fruit.name,
      sortValue: (fruit: Fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit: Fruit) => (
        <div className={`p-3 m-2 ${fruit.color}`}>{fruit.color}</div>
      ),
    },
    {
      label: "Score",
      render: (fruit: Fruit) => fruit.score,
      sortValue: (fruit: Fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit: Fruit) => fruit.name;

  return (
    <div className="p-5 flex justify-center">
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default App;