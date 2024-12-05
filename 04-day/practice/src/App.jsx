import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const ImgSrcs = {
    menPost : 'https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpghttps://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?ga=GA1.1.270770077.1727419576&semt=ais_hybrid?ga=GA1.1.270770077.1727419576&semt=ais_hybrid',
    womenPost : 'https://img.freepik.com/premium-vector/young-gamer-girl-avatar-streaming-with-colored-hair-gaming-headset_704771-3536.jpg?ga=GA1.1.270770077.1727419576&semt=ais_hybrid',
    visualPost : 'https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?ga=GA1.1.270770077.1727419576&semt=ais_hybrid',
}
  return (
    <div className="main">
      <h1>Posting Site</h1>
      <div className="wrap flex">
        <Post postHead={'Men Post'} imgSrc={ImgSrcs.menPost}/>
        <Post postHead={'Women Post'} imgSrc={ImgSrcs.womenPost}/>
        <Post postHead={'Visual Post'} imgSrc={ImgSrcs.visualPost}/>
        <AddPost />
      </div>
    </div>
  );
}

export default App;
