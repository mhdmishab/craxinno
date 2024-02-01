import axios from '../axios/axios';

export const createAccountApi = (data) => {
   return axios.post("/create-account", data);
}

export const saveAllInfoApi = (data) => {
   return axios.post('/save-all-info', data)
}

export const getSavedData = (id) => {
   return axios.get(`/get-submitted-data/${id}`)
}