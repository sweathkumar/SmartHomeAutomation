package com.sweath.smarthomeautomation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sweath.smarthomeautomation.entities.LightDevice;

public interface LightDeviceRepository extends JpaRepository<LightDevice, Long> {
    // Custom repository methods, if needed
}
