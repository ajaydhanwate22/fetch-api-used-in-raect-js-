import React from 'react'



export default function about(props) {
  return (
    <>
            <div className="card" style={{ width: "18rem" }}>
              <img src={props.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-title">{props.description}</h5> 
                <a href={'https://en.wikipedia.org/wiki/Mobile_phone'}>yhjsddshfh</a>
               </div>
            </div>
         
    </>
  )
}
