import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BankList() {
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    axios
      .get("http://localhost:8081/api/banks") // Replace with your backend endpoint
      .then((response) => {
        setBanks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch banks.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading bank list...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="table-container">
      <h2>Bank List</h2>
      <ul>
        {banks.map((bank) => (
          <li key={bank.bankId}>
            {bank.bankName} - {bank.bankYear} - {bank.bankEmp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BankList;