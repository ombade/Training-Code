package com.example.CURD_UsingMSQL.Repository;

import com.example.CURD_UsingMSQL.Entity.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface  EmployeeRepo extends JpaRepository<Employee ,Long> {
    Page<Employee> findAllByisDeletedFalse(Pageable pageable);
//    isDeleted
//    List<Employee> findAllByDepartmentAndisDeletedFalse(String department);
//    List<Employee> findByDepartmentAndisDeletedFalse(String Department);
}
