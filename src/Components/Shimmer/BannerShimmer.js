import React from 'react'
import "./../Banner/Banner.css";

export default function BannerShimmer() {
  return (
    <div>
         <div
      style={{backgroundColor:"#292828"}}
      className="banner"
    >
      <div className="content">
        <p className="title" style={{backgroundColor:"#6e6e6e",width:"500px",height:"50px"}}></p>
        <div className="banner-buttons">
          <button className="button" style={{backgroundColor:"#6e6e6e"}}></button>
          <button className="button" style={{backgroundColor:"#6e6e6e"}}></button>
        </div>
        <p className="description" style={{backgroundColor:"#6e6e6e",width:"350px",height:"100px",marginTop:"20px"}}></p>
      </div>
      <div className="fade_bottom"></div>
    </div>
    </div>
  )
}
