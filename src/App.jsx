import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditPost from "./components/EditPost";
import PostPage from "./components/PostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EditPost />} />
      <Route path="/postpage" element={<PostPage />} />
    </Routes>
  );
}

export default App;
