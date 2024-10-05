import React from "react";
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsListProps {
  comments: Comment[];
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Comments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-blue-500">{comment.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{comment.email}</p>
            <p className="text-gray-700">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
