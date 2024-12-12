import React from "react";

const BankForm = ({ form, editing, handleChange, handleSubmit }) => {
    return (
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
    );
};

export default BankForm;
