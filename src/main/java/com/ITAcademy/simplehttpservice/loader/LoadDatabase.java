package com.ITAcademy.simplehttpservice.loader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.ITAcademy.simplehttpservice.bean.Employee;
import com.ITAcademy.simplehttpservice.bean.Role;
import com.ITAcademy.simplehttpservice.repository.EmployeeRepository;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class LoadDatabase {

	@Bean
	CommandLineRunner initDatabase(EmployeeRepository repository) {
		return args -> {System.out.println("Preloading Data to memotyDatabase"); 
						repository.save(new Employee("Bilbo Biggins", Role.BOSS));
						repository.save(new Employee("Frodo Biggins", Role.EMPLOYEE));
						System.out.println("Data loaded");
		};
	}
}
