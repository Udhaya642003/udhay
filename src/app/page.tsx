"use server";
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <h2>
      <Link href="/new/advice">Move to page</Link>
    </h2>
  );
};

export default page;
