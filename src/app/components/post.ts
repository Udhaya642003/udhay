"use server";
const fetchPostData = async (id) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const jsonData = await resp.json();
  return jsonData;
};
export default fetchPostData;
