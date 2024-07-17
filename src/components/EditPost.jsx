import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../api/firebaseConfig";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [author, setAuthor] = useState(""); // Add this line
  const navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");

  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(postCollectionRef, { title, post, author });
    // Clear the input fields after submission
    setTitle("");
    setPost("");
    setAuthor("");
    navigate("/postpage");
  };

  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="text-center p-4 font-bold text-xl">Create A Post</div>
        <form onSubmit={createPost} className="card-body">
          <h2 className="card-title">Title:</h2>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <h2 className="card-title">Post:</h2>
          <textarea
            className="textarea textarea-bordered"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Write your post here"
          ></textarea>
          <h2 className="card-title">Author:</h2>
          <input
            type="text"
            placeholder="Author's name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-block">
            Submit Post
          </button>
        </form>
      </div>
    </>
  );
}
