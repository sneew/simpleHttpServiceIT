package com.ITAcademy.simplehttpservice.exception;

import com.ITAcademy.simplehttpservice.bean.Role;

public class EmployeeNotFoundException extends RuntimeException {

	public EmployeeNotFoundException(Long id) {
		super("Could not find employee " + id);
	}
}
