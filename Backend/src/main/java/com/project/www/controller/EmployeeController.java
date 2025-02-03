package com.project.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.www.model.EmployeeModel;
import com.project.www.service.EmployeeService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class EmployeeController
{
	@Autowired
	EmployeeService ser;
	
	@GetMapping("/show")
	public List<EmployeeModel> getDetails()
	{
		return ser.getDetails();
	}
	
	@PostMapping("/show")
	public EmployeeModel create(@RequestBody EmployeeModel emp)
	{
		return ser.create(emp);
	}
	
	@GetMapping("/show/{id}")
	public EmployeeModel getDetailsById(@PathVariable Long id)
	{
		return ser.getEmployeeById(id);
	}
	
	@PutMapping("/show/{id}")
	public ResponseEntity<EmployeeModel> updateDetails(@PathVariable Long id,@RequestBody EmployeeModel emp)
	{
		return ser.updateDetails(id,emp);
	}
	
	@DeleteMapping("/show/{id}")
	public ResponseEntity<HttpStatus> deleteDetails(@PathVariable Long id)
	{
		return ser.deleteDetails(id);
	}
}
