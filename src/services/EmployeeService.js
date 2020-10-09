import axios from 'axios';

const EMP_API_BASE_URL = "http://localhost:8080/api/v1"

class EmployeeService{

    getEmployees(){
        return axios.get(EMP_API_BASE_URL+"/employees")
    }

    createEmployees(employee){
        return axios.post(EMP_API_BASE_URL+"/employees", employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMP_API_BASE_URL+"/employees/" + employeeId)
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMP_API_BASE_URL+"/employees/" + employeeId, employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(EMP_API_BASE_URL+"/employees/" + employeeId)
    }

}

export default new EmployeeService()