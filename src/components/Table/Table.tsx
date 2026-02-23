import "./Table.scss";

export type Card = {
  branch: string;
  status: string;
  pan: string;
  activationDate: string;
  expiryDate: string;
};

export type Column = {
  title: string;
  dataIndex: keyof Card;
  key: string;
};

type TableProps = {
  dataSource: Card[];
  columns: Column[];
};

function Table({ dataSource, columns }: TableProps) {
  return (
    <table>
      <thead className="table-head">
        <tr className="table-row-head">
          {columns.map((column) => {
            return (
              <th className="table-cell-head" key={column.key}>
                {column.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="table-body">
        {dataSource.map((record, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {columns.map((column, index) => {
                return (
                  <td className="table-cell" key={rowIndex + index}>
                    {record[column.dataIndex]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
