"use server";

const fetchPostData = async (id: any) => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);
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
