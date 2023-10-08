package com.sweath.smarthomeautomation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sweath.smarthomeautomation.entities.Device;

public interface DeviceRepository extends JpaRepository<Device, Long> {
}
