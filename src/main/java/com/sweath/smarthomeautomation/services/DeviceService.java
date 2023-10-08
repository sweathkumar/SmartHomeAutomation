package com.sweath.smarthomeautomation.services;

import com.sweath.smarthomeautomation.entities.Device;

import java.util.List;

public interface DeviceService {

    List<Device> getAllDevices();

    Device getDeviceById(Long id);

    Device createDevice(Device device);

    Device updateDevice(Long id, Device device);

    void deleteDevice(Long id);
}
