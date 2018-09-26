import axios from 'axios';
import { getAccessToken } from './AuthService'; //todo  : 22.06, I przełom

const BASE_URL = 'http://localhost:3333';



function getFoodData() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/api/jokes/celebrity`;
  //return axios.get(url).then(response => response.data);
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data); //todo 22.06, II przłom ... zadziałało
}

export {getFoodData, getCelebrityData};