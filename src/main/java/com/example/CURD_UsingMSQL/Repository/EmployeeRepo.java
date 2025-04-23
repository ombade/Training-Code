package com.example.CURD_UsingMSQL.Repository;

import com.example.CURD_UsingMSQL.Entity.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface  EmployeeRepo extends JpaRepository<Employee ,Long> {
    Page<Employee> findAllByisDeletedFalse(Pageable pageable);
//    List<Employee> findAllByIsDeletedFalseAndDepartment(String department);
//@Query("SELECT e FROM Employee e WHERE e.isDeleted = false AND e.department = :department")
//List<Employee> findAllNonDeletedByDepartment(@Param("department") String department);
//List<Employee> findByisDeletedFalseAndDepartment(String department);

//    isDeleted
//    List<Employee> findAllByDepartmentAndisDeletedFalse(String department);
//    List<Employee> findByDepartmentAndisDeletedFalse(String Department);
}
