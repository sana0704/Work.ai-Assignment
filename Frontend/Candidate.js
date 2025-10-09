
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";

function CandidateTable() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data))
      .catch((err) => console.error(err));
  }, []);

const changeStatus=(id,updatedStatus)=>{
  setCandidates((prev) =>
  prev.map((c) => c.id === id ? {...c, status: updatedStatus} : c ));
};

  return (
    <div>
      <p>`Welcome , ${}`</p>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Updated Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.jobTitle}</td>
              <td >{c.status}  </td>
               <td>
              <select value={c.status}
                onChange={(e)=> changeStatus(c.id,c.target,c.value)}>
                
                <option value="Pending">Pending</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Hired">Hired</option>
              </select>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateTable;

