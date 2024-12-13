package com.comp303.bank.VanessaVictorino_finaltest_BankApp.entity;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Bank")
public class Bank {

    @Id
    private String bankId;

    @NotBlank(message = "Bank name is mandatory")
    private String bankName;

    @Min(value = 1800, message = "Year must be no earlier than 1800")
    @Max(value = 2024, message = "Year must be no later than 2024")
    private int bankYear;

    @Min(value = 1, message = "Employee count must be at least 1")
    private int bankEmp;

    @NotBlank(message = "Bank address is mandatory")
    private String bankAddress;

    @Min(value = 1, message = "Number of branches must be at least 1")
    private int bankBranches;

    @Min(value = 1, message = "Number of ATMs must be at least 1")
    private int bankATMs;

    // Parameterized constructor for data
    public Bank(String bankId, String bankName, int bankYear, int bankEmp, String bankAddress, int bankBranches, int bankATMs) {
        this.bankId = bankId;
        this.bankName = bankName;
        this.bankYear = bankYear;
        this.bankEmp = bankEmp;
        this.bankAddress = bankAddress;
        this.bankBranches = bankBranches;
        this.bankATMs = bankATMs;
    }

    // Default constructor
    public Bank() {}
    
    // Getters and Setters

    public String getBankId() {
        return bankId;
    }

    public void setBankId(String bankId) {
        this.bankId = bankId;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public int getBankYear() {
        return bankYear;
    }

    public void setBankYear(int bankYear) {
        this.bankYear = bankYear;
    }

    public int getBankEmp() {
        return bankEmp;
    }

    public void setBankEmp(int bankEmp) {
        this.bankEmp = bankEmp;
    }

    public String getBankAddress() {
        return bankAddress;
    }

    public void setBankAddress(String bankAddress) {
        this.bankAddress = bankAddress;
    }

    public int getBankBranches() {
        return bankBranches;
    }

    public void setBankBranches(int bankBranches) {
        this.bankBranches = bankBranches;
    }

    public int getBankATMs() {
        return bankATMs;
    }

    public void setBankATMs(int bankATMs) {
        this.bankATMs = bankATMs;
    }

    // Optional: Override toString() for debugging purposes
    @Override
    public String toString() {
        return "Bank{" +
                "bankId='" + bankId + '\'' +
                ", bankName='" + bankName + '\'' +
                ", bankYear=" + bankYear +
                ", bankEmp=" + bankEmp +
                ", bankAddress='" + bankAddress + '\'' +
                ", bankBranches=" + bankBranches +
                ", bankATMs=" + bankATMs +
                '}';
    }
}
