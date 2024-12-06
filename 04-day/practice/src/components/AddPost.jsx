import { useEffect } from "react"
import { useState } from "react"


export default function AddPost({allPost,setAllPost , postImg , setPostImg , setPostName , postName , error , setError}) {
     // let backendPost = localStorage.getItem('allPost')
     // console.log("🚀 ~ AddPost ~ backendPost:", backendPost)
     // console.log("🚀 ~ AddPost ~ allPost:", allPost)
     function addingPost(){
          if (postName !== '') {
               setError('')
               if (postImg !== '') {
                    setError('')
                    let post = {
                         postName,
                         postImg,
                         like:0,
                         dislike:0
                    }
                    setAllPost((pre) => {
                         console.log("🚀 ~ addingPost ~ pre:", pre)
                         return[...pre , post] 
                    })
                    // localStorage.setItem('allPost' , JSON.stringify(allPost))
                    setPostImg('')
                    setPostName('')
               }else{
                    setError('Enter Post Image Url...')
               }
          }else{
               setError('Please Enter Post Name...')
          }
     }
     useEffect(()=>{
          localStorage.setItem('allPost' , JSON.stringify(allPost))
     },[allPost])
     return (
          <div className="main" style={{
               display:"flex",
               flexDirection:'column',
               alignItems:'center',
               border:'3px solid black',
               padding:'10px 20px',
               gap:'10px'
          }}>
               <h2>Add Post</h2>
               {/* lable */}
               <label htmlFor="postImg" className="postImg" style={{
                    cursor:'pointer',
               }}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAMAAACtIJvYAAAAaVBMVEX///8AAADy8vJISEhcXFz19fWPj4+/v7+Li4v5+fnT09P8/Pw6Ojrg4ODo6Ojj4+OhoaGXl5fLy8sTExNXV1cqKiojIyOvr69RUVFsbGxmZmaEhIQcHBy5ubk/Pz/a2toyMjJ8fHx0dHSXZnkeAAAEJUlEQVR4nO2a2baqMAxADQjIKFqVedD//8ibFtEWOHehVvAh++UIiG47JGk5mw1BEARBEARBEARBEARBEARBEEuwj/Pt29jed6QqBh9xcL8g5eAH1+bb4E8qvmAVAIuN93ECAEO7lAew++gDjgCxJpcn2IHORx9gffqzpiCr+ZDVfF61cqNBHPgBq2h3MtNMSTLrWyX3JHPzf8iKJ6dzboKSZNa2si4ACf5tAvmeta0qrA/EC8xS15+xOvR52M2g/Rkru7fyb1D+jFUM0MUEw4R0NSt/cOwxSC3+4iAXL8tahePCNwNIneZYYHyI1rFKmDk6Z6QYqkoeRo/Pk0tahfjl9lirEKH9JKecJa14q0A1Ph9VcRIqA25BK5xu9RlYNL4yYjkrXCGULqbi3Polq0D03nZqaK1nteu+KKqVyTYMXwtbYf8x9/4ikCrPyp5aji5k5T7jEQbxbX/ax4PThNZCVrtnUeeaXUXFiUUROv4AdxErnHrt48Ao7+3mo2tby3XVg+r6x4jTaOUyZYijY83HmM27NTz3dd+3GVj522efCWzebf4V4NJgHhpp+VHjeV6oe1dmYIVtEyjXLR67eEuJ3IezUn773s5rnq3b020iO2mz2itFiiAURcJ53x0dn+nRrc7Knt8u/JKVmw/6j8MXgSyUjlgjfsBJuOSHJIkL4Xce3arHCkNSPn5LAa3UfknXcDxQXIpHSePGXDI1/soAH1iFOEImusFylE4tgHlCKtsr70pwuWjOqTJes8JFwqyVRXXkM5ON3mpgc5V6ZqNkZU/G7hG+uOky4Y/rRMi07HM/rXB61fN+6f7Sr8EE0lA6aQqzD6vI5EF91mC9KdvGt6B5vI4CabrqsLrNzrIeVhJPe0vZoXEmU+XbVvj3NKMe5uz+t/JKge1Hd7xrFWEcnNn0UQvyUnFgVWl5KHC32s4fpp4a/wdWOLLS4R2v0z3wwIC9nTulD8CkDhzVolsoP4/vWNeZUcNeeESUQy1HcFdZCfkY9XTMQhy7AQYF82DPYIf1Qg2paFYr7k5h+uvu7UJYosyFd7FuLz2jNDb9wElG18Tpjx8rdLhxPV+qtriVGDjH4bVMpxUOBteay4ZHJPO+PSrORDja/f7ahpc47EuPov/LVS13hnPwBqWmcuYlKnULaWDlp9Au69MRqhoDK6+cVQ5phxf3UnAbWO2UImdBYiU7qVZ4ZOp/ZD8HvxVL1v5IScfZxCJpIXC8SxnYq1z5SjBxwyLwBf5kfX4EPaXoexiXPpIrOGy9/uNg5Qf1YK4ZuMZdaMtmGl9osUIK4r7Ds6n+/015DVc8psgSLzSMqHEO/N+lag0lzKeIxgHWmmbQbc4U6wSqIdW1fJQxp8kN5nWIvPiabzPbCWeu2giCIAiCIAiCIAiCIAiCIAiC0MU/xvMuVT1euxAAAAAASUVORK5CYII=" alt="Add Image" width={100} style={{
                         borderRadius: '50%',
                         border:'2px solid black',
                         textAlign:'center'
                    }}/>
               </label>
               {/* error */}
               <div className="fileName" style={{
                    background:'lightCoral',
                    padding: '1px 20px',
                    borderRadius:'25px',
                    border:'2px solid red',
                    fontFamily:'monospace',
                    fontWeight:600,
               }}>{error ? error : "Kindly Fill All Fields!"}</div>
               {/* psost name */}
               <input value={postName} type="text" className="postHead" placeholder="Enter Post Name..." style={{
                    borderRadius:'25px',
                    padding:'5px 10px',
               }} onChange={(e)=>setPostName(e.target.value)}/>
               {/* img url */}
               <input type="text" value={postImg} onChange={(e)=>{
                    if (e.target.value.includes('http')) {  
                         setError('')  
                         setPostImg(e.target.value)

                    }else{
                         setPostImg(e.target.value)
                         setError('Enter Valid Url')
                    }
                    }
               } id="postImg" placeholder="Enter Post Image Address ..." className="imgUrl" style={{
                    borderRadius:'25px',
                    padding:'5px 10px',
               }}/>
               {/* <input type="file" id="postImg" style={{
                    display: 'none'
               }}  onChange={(e)=>{
                    setPostImg(e.target.files[0]);
               // }}/> */}
               {/* post add btn */}
               <button className="addPostBtn" style={{
                    fontFamily:'serif',
                    borderRadius:'50px',
                    fontSize:'15px',
                    padding:'7px 14px',
                    cursor:'pointer'
               }} onClick={addingPost}>Add Post</button>
          </div>
     )
}