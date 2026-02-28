import Input from "../../components/Input/Input";
import Table, { type Column } from "../../components/Table/Table";
import cardList from "../../test/API/cards-list.json";
import columnsJson from "../../test/API/card-table-columns.json";
import "./Dashboard.scss";

// type DashboardProps = {
// };

function Dashboard() {
  const columns: Column[] = columnsJson.columns as Column[];

  return (
    <>
      <div className="filters-container">
        <Input id="branch" label="Branch" />
        <Input id="pan" label="Pan" />
        <Input id="State" label="State" />
      </div>
      <Table dataSource={cardList.cards} columns={columns} />
    </>
  );
}

export default Dashboard;
