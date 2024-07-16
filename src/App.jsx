import "./App.css";

function App() {
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="text-center p-4 font-bold text-xl">Create A Post</div>
        <div className="card-body">
          <h2 className="card-title">Title:</h2>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <h2 className="card-title">Post:</h2>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write your post here"
          ></textarea>
          <button className="btn btn-block">Submit Post</button>
        </div>
      </div>
    </>
  );
}

export default App;
