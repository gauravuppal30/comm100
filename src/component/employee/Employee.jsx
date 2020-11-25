import { useState, useEffect } from "react";
import employeeJson from "../../jsonData/employee.json";
import "./Employee.css";

export default function Employee() {
  const [employees, setEmployees] = useState(employeeJson.data);

  //   useEffect(() => {
  //     fetchEmployeeData();
  //   }, [employees]);

  //   const fetchEmployeeData = async () => {
  //     return fetch("http://dummy.restapiexample.com/api/v1/employees")
  //       .then((response) => {
  //         console.log("res", response);
  //         if (response.status === 200) {
  //           setEmployees(response.data || []);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("error", error);
  //       });
  //   };

  if (employees.length < 1) {
    return <img src="./images/Preloader.gif" alt="loader" />;
  }

  return (
    <div className="employee-group">
      {employees.map((employee) => {
        return (
          <div key={employee.id} className="employee-details">
            <div>Name: {employee.employee_name}</div>
            <div>Salary: {employee.employee_salary}</div>
            <div>Age: {employee.employee_age}</div>
          </div>
        );
      })}
    </div>
  );
}
