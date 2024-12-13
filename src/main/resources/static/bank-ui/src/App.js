import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const BankApp = () => {
    const [banks, setBanks] = useState([]);
    const [form, setForm] = useState({
        bankId: "",
        bankName: "",
        bankYear: "",
        bankEmp: "",
        bankAddress: "",
        bankBranches: "",
        bankATMs: ""
    });
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBanks();
    }, []);

    const fetchBanks = async () => {
        try {
            const response = await axios.get("http://localhost:8081/api/banks");
            setBanks(response.data);
        } catch (err) {
            console.error("Error fetching banks:", err);
            setError("Failed to fetch banks.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
        // Update existing bank
        try {
            await axios.put(`http://localhost:8081/api/banks/${form.bankId}`, form);
            setEditing(false); // Exit editing mode
        } catch (err) {
            console.error("Error updating bank:", err);
            setError("Failed to update bank.");
        }
    } else {
        // Add a new bank
        try {
            const newBank = { ...form, bankId: undefined }; // Ensure no ID is sent for new entries
            await axios.post("http://localhost:8081/api/banks", newBank);
        } catch (err) {
            console.error("Error adding bank:", err);
            setError("Failed to add bank.");
        }
    }

    // Refresh the table and reset the form
    fetchBanks();
    setForm({
        bankId: "",
        bankName: "",
        bankYear: "",
        bankEmp: "",
        bankAddress: "",
        bankBranches: "",
        bankATMs: ""
    });
};

    const handleEdit = (bank) => {
        setForm(bank);
        setEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/banks/${id}`);
            fetchBanks();
        } catch (err) {
            console.error("Error deleting bank:", err);
            setError("Failed to delete bank.");
        }
    };

   return (
        <div className="container">
            {/* Hero Section */}
            <section className="hero is-link">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-centered">Bank Application</h1>
                        <h2 className="subtitle has-text-centered">
                            Manage your banks efficiently and effortlessly.
                        </h2>
                    </div>
                </div>
            </section>

            {/* Error Notification */}
            {error && (
                <div className="notification is-danger is-light mt-4">
                    <button className="delete" onClick={() => setError(null)}></button>
                    {error}
                </div>
            )}

            {/* Content Section */}
            <section className="section">
                <div className="columns is-desktop">
                    {/* Add Bank Form on the Left */}
                    <div className="column is-5">
                        <div className="box">
                            <h2 className="title is-4">{editing ? "Edit Bank" : "Add Bank"}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">Bank Name</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            name="bankName"
                                            value={form.bankName}
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Year</label>
                                    <div className="control">
                                        <input
                                            type="number"
                                            name="bankYear"
                                            value={form.bankYear}
                                            onChange={handleChange}
                                            className="input"
                                            min="1800"
                                            max="2024"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Employees</label>
                                    <div className="control">
                                        <input
                                            type="number"
                                            name="bankEmp"
                                            value={form.bankEmp}
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Address</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            name="bankAddress"
                                            value={form.bankAddress}
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Branches</label>
                                    <div className="control">
                                        <input
                                            type="number"
                                            name="bankBranches"
                                            value={form.bankBranches}
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">ATMs</label>
                                    <div className="control">
                                        <input
                                            type="number"
                                            name="bankATMs"
                                            value={form.bankATMs}
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button
                                            type="submit"
                                            className={`button is-fullwidth ${
                                                editing ? "is-warning" : "is-success"
                                            }`}
                                        >
                                            {editing ? "Update Bank" : "Add Bank"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Bank List on the Right */}
                    <div className="column is-7">
                        <div className="box">
                            <h2 className="title is-4">Bank List</h2>
                            <div className="table-container">
                                <table className="table is-fullwidth is-striped is-hoverable">
                                    <thead>
                                        <tr>
                                            <th>Bank Name</th>
                                            <th>Year</th>
                                            <th>Employees</th>
                                            <th>Address</th>
                                            <th>Branches</th>
                                            <th>ATMs</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {banks.map((bank) => (
                                            <tr key={bank.bankId}>
                                                <td>{bank.bankName}</td>
                                                <td>{bank.bankYear}</td>
                                                <td>{bank.bankEmp}</td>
                                                <td>{bank.bankAddress}</td>
                                                <td>{bank.bankBranches}</td>
                                                <td>{bank.bankATMs}</td>
                                                <td>
                                                    <button
                                                        onClick={() => handleEdit(bank)}
                                                        className="button is-small is-warning"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(bank.bankId)}
                                                        className="button is-small is-danger ml-2"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BankApp;