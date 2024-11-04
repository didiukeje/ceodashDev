import axios from 'axios';

const API_URL = 'http://105.113.2.249:8080/ceodashboard/public/api/groupedData';

export const fetchGroupedData = async (state) => {
  try {
    const response = await axios.post(API_URL, { state });
    return response.data;
  } catch (error) {
    console.error("Error fetching grouped data:", error);
    throw error;
  }
};
