package com.sweath.smarthomeautomation.controllers;

import com.sweath.smarthomeautomation.model.Automation;
import com.sweath.smarthomeautomation.services.AutomationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/automations")
public class AutomationController {

    private final AutomationService automationService;

    @Autowired
    public AutomationController(AutomationService automationService) {
        this.automationService = automationService;
    }

    @GetMapping
    public List<Automation> getAllAutomations() {
        return automationService.getAllAutomations();
    }

    @GetMapping("/{id}")
    public Automation getAutomationById(@PathVariable Long id) {
        return automationService.getAutomationById(id);
    }

    @PostMapping
    public Automation createAutomation(@RequestBody Automation automation) {
        return automationService.createAutomation(automation);
    }

    @PutMapping("/{id}")
    public Automation updateAutomation(@PathVariable Long id, @RequestBody Automation automation) {
        return automationService.updateAutomation(id, automation);
    }

    @DeleteMapping("/{id}")
    public void deleteAutomation(@PathVariable Long id) {
        automationService.deleteAutomation(id);
    }
}
