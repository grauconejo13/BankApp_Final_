package com.comp303.bank.VanessaVictorino_finaltest_BankApp.service;

import com.comp303.bank.VanessaVictorino_finaltest_BankApp.entity.Bank;
import com.comp303.bank.VanessaVictorino_finaltest_BankApp.repository.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BankServiceImpl implements BankService {

    @Autowired
    private BankRepository repository;

    @Override
    public Bank saveBank(Bank bank) {
        // Save to MongoDB
        return repository.save(bank);
    }

    @Override
    public Optional<Bank> getBankById(String id) {
        // Fetch from MongoDB by ID
        return repository.findById(id);
    }

    @Override
    public Optional<Bank> getBankByName(String name) {
        // Fetch from MongoDB by name
        return repository.findByBankName(name);
    }

    @Override
    public List<Bank> getAllBanks() {
        List<Bank> banks = repository.findAll();
        System.out.println("Banks fetched from MongoDB: " + banks);
        return banks;
    }

    @Override
    public void deleteBankById(String id) {
        // Delete from MongoDB by ID
        repository.deleteById(id);
    }

    @Override
    public void deleteBankByName(String name) {
        // Delete from MongoDB by name
        repository.deleteByBankName(name);
    }

    @Override
    public Bank updateBank(Bank bank) {
        // Save updated bank to MongoDB
        return repository.save(bank);
    }
}
