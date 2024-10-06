"use server";

const fetchPostData = async (id: any) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const jsonData = await resp.json();
  return jsonData;
};

export default fetchPostData;
