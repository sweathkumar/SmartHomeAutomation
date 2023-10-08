// DeviceController.java
package com.sweath.smarthomeautomation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sweath.smarthomeautomation.entities.Device;
import com.sweath.smarthomeautomation.repositories.DeviceRepository;

@RestController
@RequestMapping("/devices")
public class DeviceController {

    @Autowired
    private DeviceRepository deviceRepository;

    @GetMapping("/{id}")
    public Device getDeviceById(@PathVariable Long id) {
        return deviceRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Device createDevice(@RequestBody Device device) {
        return deviceRepository.save(device);
    }

    @PutMapping("/{id}")
    public Device updateDevice(@PathVariable Long id, @RequestBody Device updatedDevice) {
        Device device = deviceRepository.findById(id).orElse(null);
        if (device != null) {
            // Update device properties here
            device.setName(updatedDevice.getName());
            device.setType(updatedDevice.getType());
            // Save the updated device
            return deviceRepository.save(device);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteDevice(@PathVariable Long id) {
        deviceRepository.deleteById(id);
    }
}
