export default function AddPost() {

     return (
          <div className="main" style={{
               display:"flex",
               flexDirection:'column',
               alignItems:'center',
          }}>
               <h2>Add Post</h2>
               <label htmlFor="postImg" className="postImg" style={{
                    cursor:'pointer',
               }}>
                    <img src="https://img.freepik.com/free-vector/image-upload-concept-illustration_23-2148276163.jpg?ga=GA1.1.270770077.1727419576&semt=ais_hybrid" alt="Add Image" width={100} style={{
                         borderRadius: '50%',
                    }}/>
               </label>
               <input type="text" className="postHead" placeholder="Enter Post Name..." />
               <input type="file" id="postImg" style={{
                    display: 'none'
               }} />
          </div>
     )
}