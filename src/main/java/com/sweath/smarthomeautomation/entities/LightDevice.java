// LightDevice.java
package com.sweath.smarthomeautomation.entities;

import javax.persistence.Entity;

@Entity
public class LightDevice extends Device {

    private int brightness;

    // Constructors, setters, and other properties/methods

    public int getBrightness() {
        return brightness;
    }

    public void setBrightness(int brightness) {
        this.brightness = brightness;
    }
}
