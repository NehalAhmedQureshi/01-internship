import { useEffect } from "react"
import { useState } from "react"


export default function Post({postHead , imgSrc , allPost , setAllPost,}){
     let [like , setLike] = useState(0)
     console.log("🚀 ~ Post ~ like:", like)
     let [disLike , setDisLike] = useState(0)
      let [index , setIndex] = useState(null)
      // function updatePost (){
      //   allPost.forEach((post,index) => {
      //     console.log("🚀 ~ allPost.forEach ~ post:", post)
      //     return post.postName == postHead ? setIndex(index) : setIndex(null)
      //   	})
        
      //   if (index != null) {
      //     console.log("🚀 ~ updatePost ~ like:", like)
      //     let newPosts = allPost.splice(index , 1 , {
      //       postName : postHead ,
      //       postImg : imgSrc ,
      //       like,
      //       disLike:disLike,
      //     })
      //     console.log("🚀 ~ updatePost ~ newPosts:", newPosts)
      //     setAllPost(newPosts)
      //     // localStorage.setItem('allPost' , JSON.stringify(allPost))
      //   }}
    //  useEffect(()=>{
    //     updatePost()
    //  },[like , disLike])
     return (
     <div className="post bordered w-20 flex col centered" style={{
      padding:'10px 0px'
     }}>
          <h2>{postHead}</h2>
          <img
            src={imgSrc}
            alt="no-img"
            className="postImg"
            width={150}
          />
          <div className="buttons" style={{
            display: 'flex',
            gap: '10px',
          }}>
            <button className="like" onClick={() => {
              setLike(like + 1)
            }}>Like-{like}</button>
            <button className="disLike" onClick={() => {
              setDisLike(disLike + 1)
            }}>Dislike-{disLike}</button>
          </div>
        </div>
        )
}