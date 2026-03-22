import Input from "../../components/Input/Input";
// import Table, { type Column } from "../../components/Table/Table";
import cardList from "../../test/API/cards-list.json";
// import columnsJson from "../../test/API/card-table-columns.json";
import "./Dashboard.scss";
import Card from "../../components/Card/Card";

// type DashboardProps = {
// };

function Dashboard() {
  // const columns: Column[] = columnsJson.columns as Column[];

  return (
    <>
      <div className="filters-container">
        <Input id="branch" label="Branch" />
        <Input id="pan" label="Pan" />
        <Input id="State" label="State" />
      </div>
      <div className="cards-container">
        {cardList.cards.map((card) => {
          return (
            <Card title={card.pan} actions={[<span>Go to Card actions</span>]}>
              <div>{card.branch}</div>
              <div>{card.status}</div>
              <div>{card.activationDate}</div>
              <div>{card.expiryDate}</div>
            </Card>
          );
        })}
      </div>
      {/* <Table dataSource={cardList.cards} columns={columns} /> */}
    </>
  );
}

export default Dashboard;
