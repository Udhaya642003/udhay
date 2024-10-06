import React from "react";

const TodoList = async ({
  todos,
}: {
  todos: Array<{ id: number; title: string; completed: boolean }>;
}) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`p-4 rounded-lg shadow-md border ${
              todo.completed
                ? "bg-green-100 border-green-300"
                : "bg-red-100 border-red-300"
            }`}
          >
            <h2 className="text-lg font-semibold">{todo.title}</h2>
            <p
              className={`text-sm mt-2 ${
                todo.completed ? "text-green-700" : "text-red-700"
              }`}
            >
              {todo.completed ? "Completed" : "Incomplete"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
