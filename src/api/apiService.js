import axios from 'axios';

const API_URL = '/ceodashboard/public/api/groupedData';
const API_URLS = '/ceodashboard/public/api/fetch-tx-curr-gap';

export const fetchGroupedData = async (state) => {
  try {
    const response = await axios.post(API_URL, { state });
    console.log(response, 'RESPONSE HERE...')
    return response.data;
  } catch (error) {
    console.error("Error fetching grouped data:", error);
  }
};


export const txCurrTotalData = async (state) => {
  try {
    const response = await axios.post(API_URLS, { state });
    console.log(response, 'RESPONSE HERE...')
    return response.data;
  } catch (error) {
    console.error("Error fetching grouped data:", error);
  }
};

export const htsTstData = async () => {
  try {
    const response = await fetch(API_URLS.userData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};