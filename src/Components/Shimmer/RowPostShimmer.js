import React from 'react'
import './../RowPost/RowPost.css'

export default function RowPostShimmer() {
  return (
    <div>
        <div className="row">
      <p style={{backgroundColor:"#6e6e6e",width:"300px",height:"30px"}}></p>
      <div className="posters">
      {[...Array(4)].map((_, index) => (
           <div key={index} style={{ backgroundColor: "#6e6e6e", width: "400px", height: "150px",margin:"20px"}}></div>
  ))}
      </div>
    </div>
    </div>
  )
}
