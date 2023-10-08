package com.sweath.smarthomeautomation.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "automation")
public class Automation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    // Other attributes
    // For example:
    // @Column(name = "trigger_condition")
    // private String triggerCondition;

    public Automation() {
        // Default constructor
    }

    // Constructors
    public Automation(String name, String description) {
        this.name = name;
        this.description = description;
    }

    // Getters and setters for id, name, description, and other attributes
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Getters and setters for other attributes
    // For example:
    // public String getTriggerCondition() {
    //     return triggerCondition;
    // }
    //
    // public void setTriggerCondition(String triggerCondition) {
    //     this.triggerCondition = triggerCondition;
    // }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Automation that = (Automation) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }

    @Override
    public String toString() {
        return "Automation{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                // Include other attributes in the toString if needed
                '}';
    }
}
