//used to connect the backend with the frontend in q seperate file for reusabiliy
import axios from 'axios'
const API_URL = 'https://expenses-server-1.onrender.com'
export const fetchTransaction =()=> axios.get(`${API_URL}/api/transactions`);
export const createTransaction =(transactiondata)=>axios.post(`${API_URL}/api/transactions`,transactiondata);
export const deleteTransaction = (id)=>axios.delete(`${API_URL}/api/transactions/${id}`)