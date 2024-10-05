"use server";
import React, { Suspense } from "react";
import { NextPage } from "next";
import Wrapper from "../../components/wrapper";
import Loader from "./loading";
interface SearchParams {
  [key: string]: string | string[] | undefined;
}
const Page: NextPage<{ searchParams: SearchParams }> = ({ searchParams }) => {
  const paginationId = Array.isArray(searchParams.id)
    ? searchParams.id[0]
    : searchParams.id || "1";
  return (
    <Suspense fallback={<Loader />} key={paginationId}>
      <Wrapper id={paginationId} />
    </Suspense>
  );
};
export default Page;
