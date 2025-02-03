package com.project.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.www.exception.ResourceNotFoundException;
import com.project.www.model.EmployeeModel;
import com.project.www.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository rep;
	
	public List<EmployeeModel> getDetails()
	{
		return rep.findAll();
	}
	
	public EmployeeModel create(EmployeeModel emp)
	{
		return rep.save(emp);
	}
	
	public EmployeeModel getEmployeeById(Long id)
	{
		return rep.findById(id).orElseThrow(()-> new ResourceNotFoundException("This Id not found"));
	}
	
	public ResponseEntity<EmployeeModel> updateDetails(Long id,EmployeeModel emp)
	{
		EmployeeModel e=rep.findById(id).orElseThrow(()->  new ResourceNotFoundException("Employee not found"));
		e.setFirstName(emp.getFirstName());
		e.setLastName(emp.getLastName());
		e.setEmail(emp.getEmail());
		EmployeeModel update=rep.save(e);
		return ResponseEntity.ok(update);
	}
	
	public ResponseEntity<HttpStatus> deleteDetails(Long id)
	{
		EmployeeModel emp=rep.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found"));
		rep.delete(emp);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
