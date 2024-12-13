package com.comp303.bank.VanessaVictorino_finaltest_BankApp.service;

import com.comp303.bank.VanessaVictorino_finaltest_BankApp.entity.Bank;
import com.comp303.bank.VanessaVictorino_finaltest_BankApp.repository.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface BankService {

		Bank saveBank(Bank bank);
	    Optional<Bank> getBankById(String id);
	    Optional<Bank> getBankByName(String name);
	    List<Bank> getAllBanks();
	    void deleteBankById(String id);
	    void deleteBankByName(String name);
	    Bank updateBank(Bank bank);
}
