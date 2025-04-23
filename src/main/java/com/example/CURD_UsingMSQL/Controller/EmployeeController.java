package com.example.CURD_UsingMSQL.Controller;

import com.example.CURD_UsingMSQL.Entity.Employee;
import com.example.CURD_UsingMSQL.Service.employeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Component
@RestController
@RequestMapping("API")
public class EmployeeController {
    @Autowired
    employeeService empService;
    @PostMapping()
    public ResponseEntity<Employee> createEmpolyee(@RequestBody Employee employee)
    {
        return ResponseEntity.ok(empService.createEmployee(employee));
    }

    @GetMapping("{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        System.out.println("Fetching the Employeee of id "+ id);
        return empService.getEmployeeById(id);
    }
//    @GetMapping
//    public List<Employee> getEmployee() {
//
//        return empService.getEmployee();
//    }

    @GetMapping
    public Page<Employee> getAllEmployees(@RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "10") int size,
                                          @RequestParam(defaultValue = "id") String sortField,
                                          @RequestParam(defaultValue = "ASC") String sortDirection) {
        return empService.getAll(page, size, sortField, sortDirection);
    }


    @DeleteMapping("/{id}")
    public Boolean deleteEmployee(@PathVariable Long id)
    {
        return empService.deleteEmployee(id);
    }

    // This is for update thecode

    @PutMapping("/{id}")
    public Optional<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return empService.update(id, employee);
    }

//    Get employees by department
    @GetMapping("getdept/{dept}")
    public List<Employee> getEmployeebyDept(@PathVariable String dept )
    {
        return empService.getEmployeesByDepartment(dept);
    }
}
