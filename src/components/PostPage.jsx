import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import { Link } from "react-router-dom";

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postRef = doc(db, "posts", id);
    await deleteDoc(postRef);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="card card-compact bg-base-100 w-96 shadow-xl"
        >
          <div className="text-center p-4 font-bold text-xl">{post.title}</div>
          <div className="card-body">
            <p>{post.post}</p>
            <p>Author: {post.author}</p>
            <Link to={"/"} className="btn btn-primary">
              Add New Post
            </Link>
            <button onClick={() => deletePost(post.id)} className="btn">
              Delete Post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
