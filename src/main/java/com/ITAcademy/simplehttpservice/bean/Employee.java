package com.ITAcademy.simplehttpservice.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Employee {
	
	private @Id @GeneratedValue Long id;
	private String name;
	private Role role;
	private int salary;

	public Employee() {
	}
	
	public Employee(String name, Role role) {
		this.name = name;
		this.role = role;
		
		payDay();
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
		payDay();
	}

	private void payDay() {
		
		if(this.role==Role.BOSS) {
			this.salary = 5000;
		}else if(this.role==Role.EMPLOYEE) {
			this.salary = 2000;
		}else if(this.role==Role.MANAGER) {
			this.salary = 3500;
		}else if(this.role==Role.VOLUNTEER) {
			this.salary = 0;
		}
	}
	
	
}
