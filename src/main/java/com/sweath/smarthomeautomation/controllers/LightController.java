// LightController.java
package com.sweath.smarthomeautomation.controllers;

import com.sweath.smarthomeautomation.entities.LightDevice;
import com.sweath.smarthomeautomation.repositories.LightDeviceRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lights")
public class LightController {

    private final LightDeviceRepository lightDeviceRepository;

    public LightController(LightDeviceRepository lightDeviceRepository) {
        this.lightDeviceRepository = lightDeviceRepository;
    }

    @GetMapping("/{id}")
    public LightDevice getLightDeviceById(@PathVariable Long id) {
        return lightDeviceRepository.findById(id).orElse(null);
    }

    @PostMapping
    public LightDevice createLightDevice(@RequestBody LightDevice lightDevice) {
        return lightDeviceRepository.save(lightDevice);
    }

    @PutMapping("/{id}")
    public LightDevice updateLightDevice(@PathVariable Long id, @RequestBody LightDevice updatedLightDevice) {
        LightDevice lightDevice = lightDeviceRepository.findById(id).orElse(null);
        if (lightDevice != null) {
            // Update light device properties here
            lightDevice.setName(updatedLightDevice.getName());
            lightDevice.setBrightness(updatedLightDevice.getBrightness());
            // Save the updated light device
            return lightDeviceRepository.save(lightDevice);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteLightDevice(@PathVariable Long id) {
        lightDeviceRepository.deleteById(id);
    }
}
