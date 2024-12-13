import React from "react";

const BankDetails = ({ bank }) => {
    return (
        <div className="bank-details">
            <h2 className="title is-4">Bank Details</h2>
            <p>
                <strong>Name:</strong> {bank.bankName}
            </p>
            <p>
                <strong>Year:</strong> {bank.bankYear}
            </p>
            <p>
                <strong>Employees:</strong> {bank.bankEmp}
            </p>
            <p>
                <strong>Address:</strong> {bank.bankAddress}
            </p>
            <p>
                <strong>Branches:</strong> {bank.bankBranches}
            </p>
            <p>
                <strong>ATMs:</strong> {bank.bankATMs}
            </p>
        </div>
    );
};

export default BankDetails;
