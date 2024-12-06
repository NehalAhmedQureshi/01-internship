import { useEffect, useState } from "react";

export default function Post({ postHead, imgSrc, allPost, setAllPost, key }) {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);

  // Function to update the post
  function updatePost() {
    const updatedPosts = allPost.map((post, idx) => {
      if (idx === key) {
        return {
          ...post,
          like: like,
          dislike: disLike,
        };
      }
      return post;
    });

    console.log("🚀 ~ updatedPosts ~ updatedPosts:", updatedPosts);
    setAllPost(updatedPosts); // Update the state
    localStorage.setItem("allPost", JSON.stringify(updatedPosts)); // Save to localStorage
  }

  // Sync likes/dislikes with allPost if editing an existing post
  useEffect(() => {
    if (allPost[key]) {
      setLike(allPost[key].like || 0);
      setDisLike(allPost[key].dislike || 0);
    }
  }, [allPost, key]);

  return (
    <div
      className="post bordered w-20 flex col centered"
      style={{ padding: "10px 0px" }}
    >
      <h2>{postHead}</h2>
      <img src={imgSrc} alt="no-img" className="postImg" width={150} />
      <div
        className="buttons"
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          className="like"
          onClick={() => {
            setLike((prev) => prev + 1);
          }}
        >
          Like-{like}
        </button>
        <button
          className="disLike"
          onClick={() => {
            setDisLike((prev) => prev + 1);
          }}
        >
          Dislike-{disLike}
        </button>
        <button onClick={updatePost}>Update Post</button>
      </div>
    </div>
  );
}
