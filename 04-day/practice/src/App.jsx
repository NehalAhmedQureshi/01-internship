import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import { useEffect } from "react";
// import { useDebugValue } from "react";

function App() {
  // const [like, setLike] = useState(0);
  // const [disLike, setDisLike] = useState(0);
  const [refresh, setRefresh] = useState(false);
  let [postName, setPostName] = useState("");
  let [postImg, setPostImg] = useState("");
  let [error, setError] = useState("");
  let [allPost, setAllPost] = useState([]);
  useEffect(() => {
    setAllPost(JSON.parse(localStorage.getItem("allPost")));
  }, [refresh]);
  useEffect(() => {
    setAllPost(JSON.parse(localStorage.getItem("allPost")));
  }, []);
  console.log("🚀 ~ App ~ allPost:", allPost);
  return (
    <div className="main">
      <h1>Posting Site</h1>
      <div
        className="wrap flex"
        style={{
          alignItems: "center",
        }}
      >
        {allPost && allPost.length > 0 ?
          allPost.map((post, key) => (
            <Post key={key} postHead={post.postName} imgSrc={post.postImg} allPost={allPost} setAllPost={setAllPost} />
          ))
          : (
            <h2
              style={{
                color: "red",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              No Posts Available!
            </h2>
          )
        }
        <button onClick={() => setRefresh(!refresh)}>Refresh</button>
        <AddPost postImg={postImg} setPostImg={setPostImg} allPost={allPost} setAllPost={setAllPost} setError={setError} error={error} postName={postName} setPostName={setPostName} />
      </div>
    </div>
  );
}

export default App;
