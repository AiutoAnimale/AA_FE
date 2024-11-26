import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getUserInfo = async () => {
  try {
    const response = await axios.get(`${API_KEY}/users/info`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return response.data; 
  } catch (error) {
    console.error("사용자 정보 가져오기 오류:", error.message);
    throw error; 
  }
};