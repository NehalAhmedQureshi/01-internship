import React from 'react'
import Child2 from './Child2'

export default function Child1({name , num}) {
     return (
          <>
               {name } , {num}
               <div>Child1</div>
               <Child2 />
          </>
     )
}
