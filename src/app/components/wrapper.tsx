"use server";
import React from "react";
import fetchPostData from "./post";
import CommentsList from "./comments";
import Pagination from "./pagination";
const Wrapper = async ({ id }: any) => {
  const postData = await fetchPostData(id);
  return (
    <>
      <Pagination currentPage={id} />
      <CommentsList comments={postData} />
    </>
  );
};

export default Wrapper;
