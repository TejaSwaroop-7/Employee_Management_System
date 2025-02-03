import axios from 'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:9090/api/show";

class EmployeeService
{
 	getEmployees(){
    	return axios.get(EMPLOYEE_API_BASE_URL);
    }
	createEmployee(employee)
	{
		return axios.post(EMPLOYEE_API_BASE_URL,employee);
	}
	getEmployeeById(empId)
	{
		return axios.get(EMPLOYEE_API_BASE_URL+'/'+empId);
	}
	updateEmployee(empId,employee)
	{
		return axios.put(EMPLOYEE_API_BASE_URL+'/'+empId,employee);
	}
	deleteEmployee(empId)
	{
		return axios.delete(EMPLOYEE_API_BASE_URL+'/'+empId);
	}
}
export default new EmployeeService();