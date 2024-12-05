import { useState } from "react"


export default function Post({postHead , imgSrc}){
     let [like , setLike] = useState(0)
     let [disLike , setDisLike] = useState(0)
     return (
     <div key={0} className="post bordered w-20 flex col centered">
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