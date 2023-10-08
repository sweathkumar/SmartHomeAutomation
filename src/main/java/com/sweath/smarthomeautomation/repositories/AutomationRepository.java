package com.sweath.smarthomeautomation.repositories;

import com.sweath.smarthomeautomation.model.Automation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutomationRepository extends JpaRepository<Automation, Long> {
}
