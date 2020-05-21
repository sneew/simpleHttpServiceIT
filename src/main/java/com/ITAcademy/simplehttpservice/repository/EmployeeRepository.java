package com.ITAcademy.simplehttpservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ITAcademy.simplehttpservice.bean.Employee;
import com.ITAcademy.simplehttpservice.bean.Role;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	List<Employee> findByRole(Role role);
	
}
