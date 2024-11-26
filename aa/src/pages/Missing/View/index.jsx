import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../style/theme";
import MissingViewDataContainer from "../../Main/MissingViewDataContainer";
import CommentContainer from "../../../components/CommentContainer";

import { useLocation } from "react-router-dom";
import { getViewAllList } from "../../../apis/getViewAllList";
import { getAllComment } from "../../../apis/comment";

export default function MissingView() {
  const location = useLocation();
   const idx = location.state?.idx;

   const [viewPost, setViewPost] = useState(null); // 초기값 null로 설정
   const [commentList, setCommentList] = useState([]);
   const [loading, setLoading] = useState(true); // 로딩 상태 추가

   useEffect(() => {
      const fetchData = async () => {
         try {
            const allPosts = await getViewAllList();
            const post = allPosts.find(item => item.idx === idx);
            setViewPost(post);

            if (post) {
               const allComments = await getAllComment(post.idx);
               setCommentList(allComments || []);
            }
         } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error.message);
         } finally {
            setLoading(false); // 로딩 상태 업데이트
         }
      };

      fetchData();
   }, [idx, commentList]);

   if (loading) {
      return <div>로딩 중...</div>; // 로딩 화면
   }


  return (
    <>
      <Container>
        {viewPost ? (
            <MissingViewDataContainer data={viewPost} />
         ) : (
            <div>게시글이 존재하지 않습니다.</div>
         )}
        <CommentContainer type="postComment" feedid={viewPost.idx} data={commentList} number={commentList.length} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
