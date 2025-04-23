package com.example.CURD_UsingMSQL.Service;

import com.example.CURD_UsingMSQL.Entity.Employee;
import com.example.CURD_UsingMSQL.Repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Component
@Service
public class employeeService  {
    @Autowired
    private EmployeeRepo repository;
    public Employee createEmployee(Employee employee) {
        return repository.save(employee);
    }

    public Optional<Employee> getEmployeeById(Long id)
    {
       return repository.findById(id);

    }

    public List<Employee> getEmployee()
    {
        return repository.findAll();

    }
    public List<Employee> getEmployeesByDepartment(String department) {
//        return repository.findByisDeletedFalseAndDepartment(department);
return null;
    }

    public boolean deleteEmployee(Long id) {
        Optional<Employee> optionalEmployee = repository.findById(id);

        if (optionalEmployee.isPresent()) {
            Employee employee = optionalEmployee.get();
            employee.setIsDeleted(true);
            repository.save(employee); // Saving the updated employee
            return true;
        }

        return false;
    }

    public Page<Employee> getAll(int page, int size, String sortField, String sortDirection) {
        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortField);
        Pageable pageable = PageRequest.of(page, size, sort);
        return repository.findAllByisDeletedFalse(pageable);
    }
// update thecontent
public Optional<Employee> update(Long id, Employee updatedEmployee) {
    return repository.findById(id).map(employee -> {
        employee.setName(updatedEmployee.getName());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setSalary(updatedEmployee.getSalary());
        return repository.save(employee);
    });
}
public List<Employee> findBySalaryGreaterThan(Double sal)
    {
       return repository.findBySalaryGreaterThan(sal);
    }

    public List<Employee> searchEmployeesByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

}
