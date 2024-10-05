"use server";
const fetchGetData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonData = await response.json();
  return jsonData;
};
export default fetchGetData;
