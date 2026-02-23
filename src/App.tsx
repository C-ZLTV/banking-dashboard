import "./App.css";
import Table, { type Column } from "./components/Table/Table";
import cardList from "./test/API/cards-list.json";
import columnsJson from "./test/API/card-table-columns.json";
import Input from "./components/Input/Input";

const columns: Column[] = columnsJson.columns as Column[];

function App() {
  return (
    <>
      <Input id={"branch"} />
      <Table dataSource={cardList.cards} columns={columns} />
    </>
  );
}

export default App;
