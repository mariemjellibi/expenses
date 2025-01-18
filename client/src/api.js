//used to connect the backend with the frontend in q seperate file for reusabiliy
import axios from 'axios'
const API_URL = 'http://localhost:5004/api'
export const fetchTransaction =()=> axios.get(`${API_URL}/transactions`);
export const createTransaction =(transactiondata)=>axios.post(`${API_URL}/transactions`,transactiondata);
export const deleteTransaction = (id)=>axios.delete(`${API_URL}/transactions/${id}`)