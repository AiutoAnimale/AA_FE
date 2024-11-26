import { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from "../../../style/theme";
import ViewDataContainer from "../../Main/PopularDataContainer/index2";
import CommentContainer from "../../../components/CommentContainer";

import { useLocation } from "react-router-dom";
import { getViewAllList } from "../../../apis/getViewAllList";
import { getAllComment } from "../../../apis/comment";

export default function CommunityView() {
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
      <Container>
         <Marginbox />
         {viewPost ? (
            <ViewDataContainer data={viewPost} color={color.Orange[1]} />
         ) : (
            <div>게시글이 존재하지 않습니다.</div>
         )}
         <CommentContainer type="postComment" feedid={viewPost.idx} data={commentList} number={commentList.length} />
      </Container>
   );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
  padding-bottom: 80px;
  background-color: ${color.White};
`;

const Marginbox = styled.div`
  height: 60px;
`;
