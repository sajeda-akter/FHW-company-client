import { useState } from "react";
import TableView from "../View/TableView";
import CardView from "../View/CardView";

const EmployeeList = () => {
  const [isTableView, setIsTableView] = useState(true);

  const handleToggleView = () => {
    setIsTableView(!isTableView);
  };
  return (
    <>
      <button className="bg-[#DA0037] w-52 mx-auto mt-6 rounded-md p-2 text-white text-xl" onClick={handleToggleView}>
        {isTableView ? "Switch to Card View" : "Switch to Table View"}
      </button>

      {isTableView ? <TableView /> : <CardView />}
      
    </>
  );
};

export default EmployeeList;
