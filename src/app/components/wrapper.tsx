"use server";
import fetchGetData from "@/app/components/getFunction";
import React from "react";
import TodoList from "./Todolist";
import fetchPostData from "./post";
import CommentsList from "./comments";
import Pagination from "./pagination";
const Wrapper = async ({ id }: any) => {
  const data = await fetchGetData();
  const firstThirty = data.slice(0, 9);
  const postData = await fetchPostData(id);
  return (
    <>
      <Pagination currentPage={id} />
      <CommentsList comments={postData} />
      <TodoList todos={firstThirty} />
    </>
  );
};

export default Wrapper;
