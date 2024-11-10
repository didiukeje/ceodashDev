import axios from 'axios';
import { API_URLS } from './apiConfig';

const API_URL = 'http://105.113.2.249:8080/ceodashboard/public/api/groupedData';

export const fetchGroupedData = async (state) => {
  try {
    const response = await axios.post(API_URL, { state });
    console.log(response, 'RESPONSE HERE...')
    return response.data;
  } catch (error) {
    console.error("Error fetching grouped data:", error);
  }
};

export const fetchData = async () => {
  try {
    const response = await fetch(API_URLS.groupedData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching grouped data:', error);
  }
};

export const fetchUserData = async () => {
  try {
    const response = await fetch(API_URLS.userData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};