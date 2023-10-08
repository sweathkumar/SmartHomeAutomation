// Device.java
package com.sweath.smarthomeautomation.entities;

import javax.persistence.*;

@Entity
public class Device {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;

    // Constructors, getters, setters, and other properties/methods
}
