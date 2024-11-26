import axios from "axios";

export const getViewAllList = async () => {
   try {
     const response = await axios.get(`${process.env.REACT_APP_API_KEY}/feeds/viewAllList`, {
       headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
       }
     });

     return response.data;
   } catch (error) {
     console.log("전체 게시물을 불러오는데 실패 : ", error.message);
   }
 };