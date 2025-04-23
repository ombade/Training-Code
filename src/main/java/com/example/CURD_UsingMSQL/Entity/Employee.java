package com.example.CURD_UsingMSQL.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id; // changed to lowercase
    String name; // changed to lowercase
    @Column(unique = true)
    String email; // changed to lowercase
    String department; // changed to lowercase
    Double salary; // changed to lowercase
    Boolean isDeleted = false;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Getters and Setters

    public Long getId() {
        return id; // changed to lowercase
    }

    public void setId(Long id) {
        this.id = id; // changed to lowercase
    }

    public String getName() {
        return name; // changed to lowercase
    }

    public void setName(String name) {
        this.name = name; // changed to lowercase
    }

    public String getEmail() {
        return email; // changed to lowercase
    }

    public void setEmail(String email) {
        this.email = email; // changed to lowercase
    }

    public String getDepartment() {
        return department; // changed to lowercase
    }

    public void setDepartment(String department) {
        this.department = department; // changed to lowercase
    }

    public Double getSalary() {
        return salary; // changed to lowercase
    }

    public void setSalary(Double salary) {
        this.salary = salary; // changed to lowercase
    }

    public Boolean getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
