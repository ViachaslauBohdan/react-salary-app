import "./App.css";
import React, { useState } from "react";
import { startingDate } from "./config";
import { CSVLink } from "react-csv";
import { calculateTable } from "./date.service";

function App() {
  const [date, setDate] = useState(startingDate);
  const [table, setTable] = useState(calculateTable(startingDate));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setDate(date);
    setTable(calculateTable(date));
  };

  return (
    <div className="App">
      <input type="date" defaultValue={date} onChange={handleChange} />
      <table>
        <thead>
          <tr>
            <th>Month name</th>
            <th>Salary date</th>
            <th>Bonus date</th>
          </tr>
        </thead>

        <tbody>
          {table.map((row, index) => {
            return (
              <tr key={row.monthName + index}>
                <td>{row.monthName}</td>
                <td>{row.salaryDate}</td>
                <td>{row.bonusDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CSVLink className="btn btn-primary" data={table}>
        Download CSV
      </CSVLink>
    </div>
  );
}

export default App;
