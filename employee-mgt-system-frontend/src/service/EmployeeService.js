import axios from "axios"

const REST_API_BASE_URL = "http://localhost:9090/api/v1/employees";
const CREATE_EMPLOYEE_API = "http://localhost:9090/api/v1/employees/create"

export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const createEmployee = (employee) => axios.post(CREATE_EMPLOYEE_API, employee);
