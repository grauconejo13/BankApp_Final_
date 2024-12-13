package com.comp303.bank.VanessaVictorino_finaltest_BankApp.repository;

import com.comp303.bank.VanessaVictorino_finaltest_BankApp.entity.Bank;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface BankRepository extends MongoRepository<Bank, String> {
    Optional<Bank> findByBankName(String bankName);
    void deleteByBankName(String bankName);
}
