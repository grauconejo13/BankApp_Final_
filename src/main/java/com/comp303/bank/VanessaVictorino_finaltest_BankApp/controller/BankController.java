package com.comp303.bank.VanessaVictorino_finaltest_BankApp.controller;

import com.comp303.bank.VanessaVictorino_finaltest_BankApp.entity.Bank;
import com.comp303.bank.VanessaVictorino_finaltest_BankApp.service.BankService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/banks")
public class BankController {

    @Autowired
    private BankService service;

    
    @PostMapping
    public ResponseEntity<Bank> addBank(@Valid @RequestBody Bank bank) {
        Bank savedBank = service.saveBank(bank);
        return ResponseEntity.ok(savedBank);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bank> getBankById(@PathVariable String id) {
        Optional<Bank> bank = service.getBankById(id);
        return bank.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Bank> getBankByName(@PathVariable String name) {
        Optional<Bank> bank = service.getBankByName(name);
        return bank.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Bank>> getAllBanks() {
        return ResponseEntity.ok(service.getAllBanks());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBankById(@PathVariable String id) {
        service.deleteBankById(id);
        return ResponseEntity.ok("Bank deleted successfully");
    }
    

    @DeleteMapping("/name/{name}")
    public ResponseEntity<String> deleteBankByName(@PathVariable String name) {
        service.deleteBankByName(name);
        return ResponseEntity.ok("Bank deleted successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bank> updateBank(@PathVariable String id, @RequestBody Bank updatedBank) {
        Optional<Bank> existingBank = service.getBankById(id);
        if (existingBank.isPresent()) {
            updatedBank.setBankId(id); // Safely set the bankId
            Bank savedBank = service.saveBank(updatedBank);
            return ResponseEntity.ok(savedBank);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
