import axios from "axios";


export const writeComment = async(feedid, body) => {
   try {
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/comments/writeComment`, {feed_id: feedid, body: body},{
         headers: {
           Authorization: `Bearer ${localStorage.getItem('token')}`,
         }
       })
       return response.data
   } catch(error) {
      console.error(error)
   }
}

export const getAllComment = async (idx) => {
   try {
     const response = await axios.get(`${process.env.REACT_APP_API_KEY}/comments/viewComment?feed_id=${idx}`, {
       headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
       }
     });

     return response.data;
   } catch (error) {
     console.log("전체 댓글을 불러오는데 실패 : ", error.message);
   }
 };
