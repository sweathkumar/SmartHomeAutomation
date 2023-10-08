package com.sweath.smarthomeautomation.services;

import com.sweath.smarthomeautomation.model.Automation;
import java.util.List;

public interface AutomationService {

    List<Automation> getAllAutomations();

    Automation getAutomationById(Long id);

    Automation createAutomation(Automation automation);

    Automation updateAutomation(Long id, Automation automation);

    void deleteAutomation(Long id);
}
